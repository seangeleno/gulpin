var gulp      = require('gulp')
,   concat    = require('gulp-concat')
,   uglify    = require('gulp-uglify')
,   uglifycss = require('gulp-uglifycss')
,   nodemon   = require('gulp-nodemon')

  // gulp.task('test', function(){
  //   console.log('Test task is running. All is right in the world');
  // })

  gulp.task('minify-css', function(){
    gulp.src('public/dev/css/*.css')
      .pipe(concat('application.min.css'))
      .pipe(uglifycss())
      .pipe(gulp.dest('public/css')) //piping vs promises? whats the difference
  })

  gulp.task('nodemon', function(){
    nodemon({
      ext: 'js html css', //anytime there are changes any of these types of files, it'll restart nodemon
      env: {'NODE_ENV': 'development'} //let heroku handle the server you're on an actual production environment
    })
  })

  gulp.watch('public-dev/css/*.css', ['minify-css'])

  gulp.task('default', ["nodemon"], function(){
    console.log('Default task: winning!');
  })
