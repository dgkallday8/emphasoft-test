const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const gulpIf = require('gulp-if')
const watch = require('gulp-watch')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()
const imagemin = require('gulp-imagemin');


const config = {
    src: {
        html: './src/**/*.html',
        style: './src/scss/**/*.scss',
        js: './src/js/**/*.js',
        img: './src/img/**/*.+(svg|png|jpg)'
    },
    docs: {
        html: './docs/',
        style: './docs/css/',
        js: './docs/js/',
        img: './docs/img'
    },
    clean: './docs',
    isDevelop: true

}

gulp.task('scss', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(gulpIf(config.isDevelop, sourcemaps.init()))
        .pipe(sass())
        .pipe(concat('bundle.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions']
        }))
        .pipe(gulpIf(!config.isDevelop, cleanCss()))
        .pipe(gulpIf(config.isDevelop, sourcemaps.write()))
        .pipe(gulp.dest(config.docs.style))
        .pipe(browserSync.stream())
})
gulp.task('html', function () {
    return gulp.src('./src/index.html')
        .pipe(gulpIf(!config.isDevelop, htmlmin({
            collapseWhitespace: true,
            removeComments: true
        })))
        .pipe(gulp.dest(config.docs.html))
})
gulp.task('js', function () {
    return gulp.src(config.src.js)
        .pipe(gulpIf(config.isDevelop, sourcemaps.init()))
        .pipe(gulpIf(!config.isDevelop, uglify()))
        .pipe(gulpIf(config.isDevelop, sourcemaps.write()))
        .pipe(gulp.dest(config.docs.js))
        .pipe(browserSync.stream())
})
gulp.task('image', function () {
    return gulp.src(config.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(config.docs.img))
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: config.docs.html
        }
    })
    watch(config.src.style, gulp.parallel('scss'))
    watch(config.src.js, gulp.parallel('js'))
    watch(config.src.img, gulp.parallel('image'))
    watch(config.src.html, gulp.series('html', browserSync.reload))
})
gulp.task('del', function () {
    return del('./docs')
})


gulp.task('default', gulp.series(
    'del',
    gulp.parallel('scss', 'html', 'js', 'image'),
    gulp.parallel('serve')
))