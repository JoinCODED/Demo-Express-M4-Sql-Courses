const express = require('express');
const router = express.Router();
const {
  coursesGet,
  coursesUpdate,
  coursesDelete,
  fetchCourse,
} = require('./courses.controllers');

router.param('courseId', async (req, res, next, courseId) => {
  const course = await fetchCourse(+courseId, next);
  if (course) {
    req.course = course;
    next();
  } else {
    const err = new Error('Course Not Found');
    err.status = 404;
    next(err);
  }
});

router.get('/', coursesGet);

router.delete('/:coarseId', coursesDelete);

router.put('/:coarseId', coursesUpdate);

module.exports = router;
