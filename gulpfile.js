const gulp = require('gulp');
const sass = require('gulp-sass');

const sassFiles = './src/utility/*.scss';
const cssDest = 'dist/';

gulp.task('default', async function(){
    gulp.src(sassFiles)
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});