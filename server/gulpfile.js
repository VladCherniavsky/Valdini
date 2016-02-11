var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    minifyCss = require('gulp-minify-css'),
    server = require( 'gulp-develop-server' );

gulp.task('default', function () {
    return  gulp.src('../public/app/home/**/*.*')
        .on('data', function (file) {
            console.log(file.history);

        })
        .pipe(gulp.dest('../public/dest'));
});