var gulp      = require('gulp')
,   concat    = require('gulp-concat')
,   uglify    = require('gulp-uglify')
,   uglifycss = require('gulp-uglifycss')
,   nodemon   = require('gulp-nodemon')

  // gulp.task('test', function(){
  //   console.log('Test task is running. All is right in the world');
  // })

  gulp.task('concat-css', function(){
    gulp.src('public/dev/css/*.css')
  })

  gulp.task('default', ["test"], function(){
    console.log('Default task: winning!');
  })
