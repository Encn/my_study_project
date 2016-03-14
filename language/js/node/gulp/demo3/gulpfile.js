const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

var paths = {
  src: 'src/*',
  dest: 'build'
};

gulp.task('clean', ()=> {
    return del(paths.dest);
});

gulp.task('js',['clean'],()=> {
  return gulp.src(paths.src)
  	  .pipe(sourcemaps.init())
	      .pipe(babel({
				presets: ['es2015']
			}))
	      .pipe(uglify())
	      .pipe(concat('all.min.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.dest));
});

gulp.task('default',['js']);

