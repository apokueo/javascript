const gulp = require('gulp');
// Gulp dependencies go here
const babel = require('gulp-babel');

gulp.task('default', function() {
  //Gulp tasks go here
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));


      // Gulp uses a pipeline to preform the work. will look for the code in the es6/*.js files. Then compiles it to its destination


  // Browser Source
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'))
});
