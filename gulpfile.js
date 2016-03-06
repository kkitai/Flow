var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var debug = require('gulp-debug');

gulp.task('browserify', function() {
  browserify('./app.js', { debug: true })
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch('./app.js', ['browserify'])
});

gulp.task('default', ['browserify', 'watch']);
