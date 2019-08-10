const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const babel = require("gulp-babel");

sass.compiler = require('node-sass');

const path = {
    src:{
        style: "./src/scss/style.scss",
        script: "./src/script/**/*.js",
        html: "./src/**/*.html",
    },
    dist:{
        style: "./build/style",
        script: "./build/js",
        html: "./",
    }
};

gulp.task('sass', function(){
    return gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/style'))
});

function styles(){
    return gulp.src('./src/style/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path.dist.style))
}

function html() {
    return gulp.src(path.src.html)
        .pipe(gulp.dest(path.dist.html));
};

function scripts() {
    return gulp.src(path.src.script)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(path.dist.script))
};

gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('server', server);
gulp.task('styles', styles);

function server() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/scss/*.scss", gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch("./src/script/**/*.js", gulp.series('scripts')).on('change', browserSync.reload);
    gulp.watch("./src/*.html", gulp.series('html')).on('change', browserSync.reload);
    gulp.watch("./src/style/style.css", gulp.series('styles')).on('change', browserSync.reload);
};

gulp.task('default', gulp.parallel('sass', styles, scripts, html, server));