module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    'Team',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: DataTypes.TEXT,
    },
    {
      freezeTableName: true,
    }
  )
  Team.associate = function (models) {
    Team.hasMany(models.Employee, { foreignKey: 'teamId' })
  }
  return Team
}
