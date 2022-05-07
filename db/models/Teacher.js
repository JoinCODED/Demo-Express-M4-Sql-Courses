const TeacherModel = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING,
    },
  });
  return Teacher;
};

module.exports = TeacherModel;
