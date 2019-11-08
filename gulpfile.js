const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

const sassFile = 'src/index.scss';
const cssDest = 'dist/';


gulp.task('default', async function(){
    gulp.src(sassFile)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(cssDest));
});