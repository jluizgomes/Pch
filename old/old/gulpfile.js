// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compass', function () {
    return gulp.src('sass/**/*.scss')
    .pipe(compass({
        css: 'css',
        sass: 'sass',
        image: 'images'
    }))
    .pipe(cssnano())
    .pipe(rename('global.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

// minify new images
gulp.task('imagemin', function () {
    var imgSrc = 'images/**/*',
        imgDst = 'images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst))
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    return gulp.src('js/interface.js')
        .pipe(rename('interface.min.js'))
        .pipe(gulp.dest('js'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['compass']);
    gulp.watch('images/**/*', ['imagemin']);
    gulp.watch('js/**/*', ['scripts']);
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 8000,
    livereload: true,
    https: true
  });
});

// Default Task
gulp.task('default', ['compass', 'imagemin', 'scripts', 'connect', 'watch']);
