var gulp        = require('gulp');
var path        = require('path');
var babel       = require('gulp-babel');
var cssmin      = require('gulp-minify-css');
var minify      = require('gulp-minify');
var browserify  = require('gulp-browserify');
var image       = require('gulp-image');
var less        = require('gulp-less');
var htmlmin     = require('gulp-htmlmin');
var livereload  = require('gulp-livereload');
var sourcemaps  = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
var plumber     = require('gulp-plumber');
var liveReload  = require('gulp-livereload');
var gutil       = require('gulp-util');
var babel       = require('gulp-babel')


gulp.task('html', function() {
  return gulp.src('./dev/*.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('less', function () {
  return gulp.src('./dev/less/*.less')
    .pipe(plumber(function (error) {
        gutil.log(error.message);
        this.emit('end');
    }))
    .pipe(less({
      paths: [ path.join(__dirname, 'less'), path.join(__dirname, 'node_modules') ]
    }))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('scripts', function() {
  return gulp.src('./dev/scripts/app.js')
         .pipe(plumber(function (error) {
              gutil.log(error.message);
              this.emit('end');
          }))
         .pipe(browserify())
         .pipe(babel({presets: ['babili']}))
         .pipe(gulp.dest('./dist/scripts'))
});


gulp.task('inject', function() {
  return gulp.src('./dev/scripts/inject.js')
         .pipe(plumber(function (error) {
              gutil.log(error.message);
              this.emit('end');
          }))
         .pipe(browserify())
         .pipe(babel({presets: ['babili']}))
         .pipe(gulp.dest('./dist/scripts'))
});
//-------- debug ---------
gulp.task('debug-minify', function() {
  return gulp.src('./dev/*.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('debug-less', function () {
  return gulp.src('./dev/less/*.less')
    .pipe(plumber(function (error) {
        gutil.log(error.message);
        this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less'), path.join(__dirname, 'node_modules') ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('debug-scripts', function() {
  return gulp.src('./dev/scripts/app.js')
         .pipe(plumber(function (error) {
              gutil.log(error.message);
              this.emit('end');
          }))
         .pipe(browserify())
         .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('debug-inject', function() {
  return gulp.src('./dev/scripts/inject.js')
         .pipe(plumber(function (error) {
              gutil.log(error.message);
              this.emit('end');
          }))
         .pipe(browserify())
         .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('watch', function () {
   gulp.watch('./dev/scripts/*.js', ['debug-scripts']);
   gulp.watch('./dev/scripts/*.js', ['debug-inject']);
   gulp.watch('./dev/less/*.less',  ['debug-less']);
   gulp.watch('./dev/*.html',       ['debug-minify']);
});

gulp.task('default', ['scripts', 'less', 'html', 'inject']);