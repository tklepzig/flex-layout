'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: '*',
    scope: ['dependencies', 'devDependencies']
});

gulp.task('sass', function() {
    return gulp.src('scss/flex-layout.scss')
        .pipe(plugins.sass().on('error', plugins.util.log))
        .pipe(plugins.autoprefixer({
            cascade: false
        }))
        .pipe(plugins.rename('flex-layout.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(plugins.cssnano())
        .pipe(plugins.rename('flex-layout.min.css'))
        .pipe(gulp.dest('./dist'));
});
gulp.task('watch:sass', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('dev', ['sass', 'watch:sass']);
gulp.task('default', ['sass']);
