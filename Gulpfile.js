var gulp = require('gulp');
var reqDir = require('require-dir');

reqDir('./gulp'); // define tasks there

gulp.paths = {
  index : 'app/index.tpl',
  styles : 'app/styles/main.scss',
  scripts: ['app/scripts/**/*.js'],
  images: 'app/images/**/*',
  favicon: 'app/favicon.ico',
  dist : 'dist',
  cname:'CNAME'
};

gulp.task('default',['styles','deps','copy']);
