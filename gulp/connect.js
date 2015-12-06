var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: gulp.paths.dist,
    livereload: true,
    port:'3000'
  });
});
