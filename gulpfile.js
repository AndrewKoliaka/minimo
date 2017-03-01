const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');

const pathTo = {
    less: "src/assets/less/**/*.less",
    js: "src/js/*.js",
    css: 'src/assets/css/*.css'
}

gulp.task('connect', () => {
    connect.server({
        root: './',
        port: 3000,
        livereload: true
    });
});

gulp.task('less', () => {
    gulp.src(["src/assets/less/components/reset.less", pathTo.less])
        .pipe(concat('styles.css'))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/assets/css'))
        .pipe(connect.reload());
});

gulp.task('js', () => {
    connect.reload();
});

gulp.task('html', () => {
    connect.reload();
});

gulp.task('watch', () => {
    gulp.watch(pathTo.less, ['less']);
    gulp.watch(pathTo.js, ['js']);
    gulp.watch('index.html', ['html']);
});

gulp.task('default', ['less', 'connect', 'watch']);
