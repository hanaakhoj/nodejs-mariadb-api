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
    },
    {
      freezeTableName: true,
      indexes: [
        {
          unique: true,
          fields: ['id', 'email'],
        },
      ],
    }
  )
  Employee.associate = function (models) {
    Employee.belongsTo(models.Team, {
      foreignKey: 'teamId',
    })
  }
  return Employee
}
