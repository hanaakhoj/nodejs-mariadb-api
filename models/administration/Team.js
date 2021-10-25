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
      freezeTableName: true,
      indexes: [
        {
          unique: true,
          fields: ['name', 'id'],
        },
      ],
    }
  )
  Team.associate = function (models) {
    Team.hasMany(models.Employee, { foreignKey: 'teamId' })
  }
  return Team
}
