const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('mocha', function () {
  return gulp.src('./tests/*.test.js', {read: false})
    .pipe(mocha({
      reporter: 'nyan'
    }));
});
