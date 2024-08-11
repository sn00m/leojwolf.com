const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');

function html () {
    gulp.src('templates/*.html')
        .pipe(gulp.dest('docs/templates'));
    gulp.src('assets/*')
        .pipe(gulp.dest('docs/assets'));
    return gulp.src('*.html')
        .pipe(gulp.dest('docs/'));
}

function css () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('docs/'));
}

function js () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('docs/'));
}

function watch() {
    gulp.watch('js/*.js', gulp.series(js));
    gulp.watch('js/*/*.js', gulp.series(js));
    gulp.watch('scss/*.scss', gulp.series(css));
    gulp.watch('scss/partials/*.scss', gulp.series(css));
    gulp.watch('*.html', gulp.series(html));
    gulp.watch('templates/*.html', gulp.series(html));
    gulp.watch('assets/*', gulp.series(html));
}

gulp.watch('.', gulp.series(watch));