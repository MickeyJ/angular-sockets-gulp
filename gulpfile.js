var gulp       = require('gulp'),
    nodemon    = require('gulp-nodemon'),
    streamify  = require('gulp-streamify'),
    babelify   = require('babelify'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    injectHTML = require('gulp-js-html-inject'),
    uglify     = require('gulp-uglify'),
    sass       = require('gulp-sass');

gulp.task('start',() =>{
  nodemon({
    script: './bin/www',
    env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('angular',() =>{
  browserify({
    entries: 'src/app/',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, { presets: ['es2015'] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(streamify(
    injectHTML({
      basepath: 'src/app/templates'
    })
  ))
  .pipe(gulp.dest('public/'));
});

gulp.task('sass',() =>{
  gulp.src('src/style/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })).on('error', sass.logError)
    .pipe(gulp.dest('./public'));
});

gulp.task('watch',() =>{
  gulp.watch('src/app/**/*.*', ['angular']);
  gulp.watch('src/style/**/*.scss', ['sass']);
});

gulp.task('default', [ 'start', 'angular', 'sass', 'watch']);