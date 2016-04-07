'use strict';
var gulp = require('gulp');

gulp.task('images', function() {
  return gulp.src(gulp.paths.images)
  .pipe(gulp.dest(gulp.paths.dist + '/images'));
});

gulp.task('scripts', function() {
  return gulp.src(gulp.paths.scripts)
  .pipe(gulp.dest(gulp.paths.dist));
});

gulp.task('files', function() {
 gulp.src(gulp.paths.favicon)
  .pipe(gulp.dest(gulp.paths.dist));

 gulp.src(gulp.paths.bower + '/**/*')
   .pipe( gulp.dest(gulp.paths.dist + '/' + gulp.paths.bower) );

  return gulp.src(gulp.paths.cname)
  .pipe(gulp.dest(gulp.paths.dist));
});

gulp.task('copy',['images','scripts','files']);
