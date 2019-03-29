const gulp = require('gulp');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const foreach = require('gulp-foreach');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const cleanCSS = require('gulp-clean-css');

const webpackStream = require('webpack-stream');
const webpack2 = require('webpack');
const babel = require('gulp-babel');

const imagemin = require('gulp-imagemin');


const BUILD_PATH = '../dist';

gulp.task('styles', () => {
    return gulp.src('sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(`${BUILD_PATH}/styles`))
});

gulp.task('js', () => {
    return gulp.src('scripts/app*.js')
        .pipe(foreach((stream, file) => {
            return stream.pipe(sourcemaps.init())
                .pipe(webpackStream({
                    output: {
                        filename: 'main.js'
                    }
                }, webpack2))
                .pipe(babel({
                    presets: ['es2015'],
                    compact: false
                }))
                .pipe(sourcemaps.write('/'));
        }))
        .pipe(uglify())
        .pipe(gulp.dest(`${BUILD_PATH}/scripts`));
});

gulp.task('images', () => {
    return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(`${BUILD_PATH}/images`));
});

gulp.task('copy', () => {
    gulp.src('./index.html')
        .pipe(gulp.dest(`${BUILD_PATH}`));
});

gulp.task('watch', () => {
    gulp.watch('sass/*.scss', ['styles']); 
    gulp.watch('scripts/**/*.js', ['js']);
})

gulp.task('default', ['copy','styles', 'js', 'images', 'watch']);
