let gulp = require('gulp')
let sass = require('gulp-sass');
let watch = require('gulp-watch');

gulp.task('scss', () => {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
})

gulp.task('watch', function () {
    gulp.watch('./src/scss/*.scss', gulp.series('scss'));
 });

gulp.task('default', () => {
    console.log("Running...")
})