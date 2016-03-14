var gulp = require('gulp');

gulp.task('one', function (cb) {
    cb();
});

gulp.task('two', ['one'], function() {});

gulp.task('default', ['one', 'two']);