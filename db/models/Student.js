const StudentModel = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
    },
  });
  return Student;
};

module.exports = StudentModel;
