var gulp = require('gulp')
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon')
var autoprefixer = require('gulp-autoprefixer');

gulp.task('merhaba', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./'))
})
gulp.task('start', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('merhaba'));
  nodemon({
    script: 'server.js'
  })
})
