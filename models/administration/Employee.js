module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    'Team',
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
      schema: 'administration',
      freezeTableName: true,
      indexes: [
        {
          unique: true,
          fields: ['name', 'id'],
        },
      ],
    }
  )
  //   Employee.associate = function (models) {}
  return Team
}
