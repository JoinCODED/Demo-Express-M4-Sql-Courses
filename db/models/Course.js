const CourseModel = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
    },
  });
  return Course;
};

module.exports = CourseModel;
