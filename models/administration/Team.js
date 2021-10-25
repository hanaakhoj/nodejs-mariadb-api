module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    'Team',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
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
  //   Team.associate = function (models) {}
  return Team
}
