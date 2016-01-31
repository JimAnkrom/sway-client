/**
 * Created by cosinezero on 1/30/2016.
 */
var gulp = require('gulp');

var concat = require('gulp-concat');
var karma = require('karma').Server;
var uglify = require('gulp-uglify');

gulp.task('minify-js', function () {
    return gulp
        .src([
            'source/sway.client.socket.js',
            'source/sway.client.user.js'
        ])
        .pipe(concat('sway.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['minify-js'], function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});