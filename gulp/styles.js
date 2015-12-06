'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var connect = require('gulp-connect');

gulp.task('styles', function() {
  return gulp.src(gulp.paths.styles)
    .pipe(sass({includePaths:[gulp.paths.bower,gulp.paths.bower + '/foundation-sites/scss']}).on('error', sass.logError))
    .pipe( autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'] }) )
    .pipe(gulp.dest(gulp.paths.dist + '/styles'))
    .pipe(connect.reload());
});

gulp.task('styles:watch', function () {
  gulp.watch('app/styles/**/*.scss', ['styles']);
});
