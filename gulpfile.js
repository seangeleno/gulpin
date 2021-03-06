var gulp         = require('gulp')
,   concat       = require('gulp-concat')
,   uglify       = require('gulp-uglify')
,   uglifycss    = require('gulp-uglifycss')
,   nodemon      = require('gulp-nodemon')
,   jsmin     = require('gulp-jsmin')
,   rename    = require('gulp-rename')
,   browserSync = require('browser-sync')

  // gulp.task('test', function(){
  //   console.log('Test task is running. All is right in the world');
  // })

  gulp.task('minify-css', function(){
    gulp.src('public-dev/css/*.css')
      .pipe(concat('application.min.css'))
      .pipe(uglifycss())
      .pipe(gulp.dest('public/css')) //piping vs promises? whats the difference
      .pipe(browserSync.stream())
  })

  gulp.task('minify-js', function(){
    gulp.src('public-dev/js/*.js')
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
  })

  gulp.task('browser-sync', ["nodemon"], function(){
    browserSync.init(null, {
      proxy: 'http://localhost:3000',
      files: ['public-dev/**/*.*'],//any directory is ** and *.* is all files with all extensions
      browser: 'google chrome',
      port: 7000
    })
  })

  gulp.task('nodemon', function(){
    nodemon({
      ext: 'js html css', //anytime there are changes any of these types of files, it'll restart nodemon
      env: {'NODE_ENV': 'development'} //let heroku handle the server you're on an actual production environment
    })
  })

  gulp.watch('public-dev/css/*.css', ['minify-css'])
  gulp.watch('public-dev/js/*.js', ['minify-js'])

  gulp.task('default', ["browser-sync"], function(){
    console.log('Default task: winning!');
  })
