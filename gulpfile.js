const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserify = require('gulp-browserify');

function html () {
    gulp.src('templates/*.html')
        .pipe(gulp.dest('docs/templates'));
    gulp.src('templates/releases/*.html')
        .pipe(gulp.dest('docs/templates/releases'));
    gulp.src('assets/*')
        .pipe(gulp.dest('docs/assets'));
    gulp.src('assets/discog/*')
        .pipe(gulp.dest('docs/assets/discog'));
    gulp.src('assets/art/*')
        .pipe(gulp.dest('docs/assets/art'));
    gulp.src('assets/art/*/*')
        .pipe(gulp.dest('docs/assets/art'));
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
        .pipe(browserify())
        .pipe(gulp.dest('docs/'));
}

function watch() {
    gulp.watch('js/*.js', gulp.series(js));
    gulp.watch('js/*/*.js', gulp.series(js));
    gulp.watch('scss/*.scss', gulp.series(css));
    gulp.watch('scss/partials/*.scss', gulp.series(css));
    gulp.watch('*.html', gulp.series(html));
    gulp.watch('templates/*.html', gulp.series(html));
    gulp.watch('templates/releases/*.html', gulp.series(html));
    gulp.watch('assets/*', gulp.series(html));
}

exports.default = gulp.series(html, css, js);
exports.watch = gulp.series(watch);