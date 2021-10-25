module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      registered: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      teamId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Team', // Can be both a string representing the table name or a Sequelize model
          key: 'id',
        },
      },
    },
    {
      freezeTableName: true,
    }
  )
  Employee.associate = function (models) {
    Employee.belongsTo(models.Team, {
      foreignKey: 'teamId',
    })
  }
  return Employee
}
