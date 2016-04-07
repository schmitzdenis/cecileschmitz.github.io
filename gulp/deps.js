'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var wiredep = require('wiredep').stream;
var connect = require('gulp-connect');

gulp.task('deps', function() {
  return gulp.src(gulp.paths.index)
  .pipe( wiredep() )
  .pipe(rename('index.html'))
  .pipe( gulp.dest(gulp.paths.dist) )
  .pipe(connect.reload());
});

gulp.task('html:watch', function () {
  gulp.watch(['../bower.json', gulp.paths.index], ['deps']);
});
