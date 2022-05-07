let Course = require('../../db/models/Course');

exports.fetchCourse = async (courseId, next) => {
  try {
    const course = await Course.findByPk(courseId);
    return course;
  } catch (error) {
    next(error);
  }
};

exports.coursesDelete = async (req, res) => {
  try {
    await req.course.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.coursesUpdate = async (req, res) => {
  try {
    await req.course.update(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.coursesGet = async (req, res) => {
  try {
    const courses = await Course.findAll({
      attributes: { exclude: ['teacherId', 'createdAt', 'updatedAt'] },
      include: {
        model: Teacher,
        as: 'teacher',
        attributes: ['name'],
      },
    });

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
