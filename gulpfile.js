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
var htmlmin = require('gulp-htmlmin');

gulp.task('compass', function () {
    return gulp.src('./build/sass/**/*.scss')
    .pipe(compass({
        css: './build/css',
        sass: './build/sass',
        image: './build/images'
    }))
    .pipe(cssnano())
    .pipe(rename('global.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

// minify new images
gulp.task('imagemin', function () {
    var imgSrc = './build/images/**/*',
        imgDst = './dist/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst))
        .pipe(connect.reload());
});

gulp.task('htmlmin', function () {
    return gulp.src('./build/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    return gulp.src('./build/js/interface.js')
        .pipe(rename('interface.min.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch('./build/sass/**/*.scss', ['compass']);
    gulp.watch('./build/*.html', ['htmlmin']);
    gulp.watch('./build/images/**/*', ['imagemin']);
    gulp.watch('./build/js/**/*', ['scripts']);
});

gulp.task('webserver', function () {
    connect.server({
        livereload: true
    });
});

// Default Task
gulp.task('default', ['compass', 'imagemin', 'htmlmin', 'scripts', 'watch', 'webserver']);
