/**
 * Created by cosinezero on 1/30/2016.
 */



var gulp = require('gulp'),
    concat = require('gulp-concat'),
    karma = require('karma').Server,
    uglify = require('gulp-uglify');

gulp.task('watch', function () {
    var watcher = gulp.watch('src/**/*.js', ['build']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running build tasks...');
    });
});

function getSrc() {
    return [
        'package/sway.client.head.js',
        'src/sway.socket.js',
        'src/sway.actions.js',
        //'src/sway.client.socket.js',
        'src/sway.client.user.js',
        'src/sway.controller.js',
        'src/sway.management.js',
        'package/sway.client.foot.js'
    ];
}

gulp.task('minify-js', function () {
    return gulp
        .src(getSrc())
        .pipe(concat('sway.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
});

gulp.task('build', function () {
    return gulp
        .src(getSrc())
        .pipe(concat('sway.js'))
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['minify-js'], function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});