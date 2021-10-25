module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    'Team',
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: DataTypes.TEXT,
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
