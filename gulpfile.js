'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var spritesmith = require("gulp-spritesmith");
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var svgSprite = require("gulp-svg-sprites");

gulp.task('pug', function buildHTML() {
    return gulp.src('app/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
    return gulp.src('./app/style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/style'));
});

// gulp.task('css', function () {
//     return gulp.src('./dist/style')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist/style'));
// });

gulp.task('scripts', function() {
    return gulp.src(['./app/js/vendor/*.js', './app/js/blocks/*.js', './app/js/main.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean({force: true}))
});

gulp.task('copy:img', function () {
    return gulp.src(['./app/img/**/*.*', '!./app/img/sprites/**/*.*'], {base: './app'})
        .pipe(gulp.dest('./dist'))
});

gulp.task('copy:fonts', function () {
    return gulp.src(['./app/fonts/**/*.*'], {base: './app'})
        .pipe(gulp.dest('./dist'))
});

// gulp.task('sprites', function () {
//     return gulp.src('app/img/sprites/*.svg')
//         .pipe(svgSprite())
//         .pipe(gulp.dest("dist/img"));
// });

gulp.task('watch', function () {
    gulp.watch(['app/style/**/*.scss', 'app/style/*.scss'], gulp.series('sass'));
    gulp.watch(['app/**/*.pug', 'app/*.pug'], gulp.series('pug'));
    gulp.watch(['app/img/**/*.*', 'app/img/*.*'], gulp.series('copy:img'));
    gulp.watch(['app/fonts/**/*.*', 'app/fonts/*.*'], gulp.series('copy:fonts'));
    gulp.watch(['app/js/**/*.*', 'app/js/*.*'], gulp.series('scripts'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'sass',
        'pug',
        'copy:img',
        'copy:fonts',
        'scripts'
    ),
    'watch'
));

