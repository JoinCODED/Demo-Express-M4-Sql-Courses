const { Teacher, Course } = require('../../db/models');

exports.fetchTeacher = async (teacherId, next) => {
  try {
    const teacher = await Teacher.findByPk(teacherId);
    return teacher;
  } catch (error) {
    next(error);
  }
};

exports.coursesCreate = async (req, res) => {
  try {
    req.body.teacherId = req.teacher.id;
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.teachersCreate = async (req, res) => {
  try {
    const newTeacher = await Teacher.create(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.teachersDelete = async (req, res) => {
  try {
    await req.teacher.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.teachersUpdate = async (req, res) => {
  try {
    await req.teacher.update(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.teachersGet = async (req, res) => {
  try {
    const teachers = await Teacher.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Course,
        as: 'courses',
        attributes: ['id', 'name'],
      },
    });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
