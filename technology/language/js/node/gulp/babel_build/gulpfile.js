const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const gutil = require('gulp-util');
const child_process = require('child_process');
const paths = {
  src: 'src/*',
  dest: 'lib',
  test: 'test/*'
};

gulp.task('clean', function() {
  return del(paths.dest);
});

gulp.task('babel',['clean'],()=> {
  return gulp.src(paths.src)
	    .pipe(babel({
				presets: ['es2015'],
        plugins: ["babel-plugin-transform-runtime","transform-async-to-generator"]
			}))
      .on('error', function(err) {
        gutil.log('babel Error!', err.message);
        this.end();
      })
      .pipe(gulp.dest(paths.dest));
});

gulp.task('mocha',['babel'],()=>{
  child_process.exec("npm test", {}, function(err, stdout, stderr) {
        console.log('[stdout]: \n' + stdout);
        console.log('[stderr]: \n' + stderr);
    });
})

gulp.task('watch', ()=> {
  gulp.watch(paths.src,['mocha']);
  gulp.watch(paths.test,['mocha']);
});

gulp.task('default',['watch','babel','mocha']);

