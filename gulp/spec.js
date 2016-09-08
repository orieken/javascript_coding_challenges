const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const SpecReporter = require('jasmine-spec-reporter');

gulp.task('spec', function () {
  gulp.src([ './spec/factories/*.js', './spec/*.spec.js'])
    .pipe(jasmine({
        reporter: new SpecReporter()
      }
    ))
});
