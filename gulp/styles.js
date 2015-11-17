'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src(gulp.paths.styles)
    .pipe(sass({includePaths:'bower_components'}).on('error', sass.logError))
    .pipe(gulp.dest(gulp.paths.dist + '/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/styles/**/*.scss', ['styles']);
});
