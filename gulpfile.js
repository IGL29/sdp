const { src, dest, series, watch } = require('gulp');

const rename = require("gulp-rename");
const webpackStream = require('webpack-stream');
const htmlMin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const svgSprite = require('gulp-svg-sprite');
const sourceMaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const vinylNamed = require('vinyl-named');
const plumber = require('gulp-plumber');
const del = require('del');
const gulpIf = require('gulp-if');

let IS_PROD = false;
const IS_DEV = !IS_PROD;

const webpackConfig = {
  mode: IS_PROD ? 'production' : 'development',
  devtool: (IS_DEV) ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
};

const clean = () => {
  return del(['dist'])
};

const cleanHTML = () => {
  return del(['dist/*.html'])
};

const cleanCss = () => {
  return del(['dist/styles'])
};

const cleanImg = () => {
  return del([
    'dist/images/**/*.jpg',
    'dist/images/**/*.png',
    'dist/images/**/*.jpeg',
  ])
};

const cleanSvg = () => {
  return del(['dist/images/**/*.svg'])
};

const html = () => {
  return src('src/**/*.html')
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(gulpIf(IS_PROD, htmlMin({ collapseWhitespace: true })))
    .pipe(dest('dist'))
    .pipe(gulpIf(IS_DEV, browserSync.stream()))
};

const css = () => {
  return src('src/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpIf(IS_PROD, autoprefixer({
      cascade: false
    })))
    .pipe(rename('style.css'))
    .pipe(gulpIf(IS_DEV, sourceMaps.write()))
    .pipe(gulpIf(IS_PROD, csso()))
    .pipe(dest('dist'))
    .pipe(gulpIf(IS_DEV, browserSync.stream()));
};

const img = () => {
  return src([
    'src/img/**/*.png',
    'src/img/**/*.jpeg',
    'src/img/**/*.jpg',
  ])
    .pipe(gulpIf(IS_PROD, image()))
    .pipe(dest('dist/img'))
    .pipe(gulpIf(IS_DEV, browserSync.stream()));
};

const svg = () => {
  return src('src/img/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      },
    }
    ))
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream());
}

const fonts = () => {
  return src('src/fonts/*')
    .pipe(dest('dist/fonts'))
}

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
}

const js = () => {
  return src(['src/scripts/index.js',
    'src/scripts/catalogPage.js',
    'src/scripts/cooperationPage.js',
    'src/scripts/contactsPage.js',
    'src/scripts/productPage.js'])
    .pipe(plumber())
    .pipe(vinylNamed())
    .pipe(webpackStream(webpackConfig))
    .pipe(dest('dist/scripts'))
    .pipe(browserSync.stream());
}

watch('src/**/*.html', html);
watch('src/styles/**/*.scss', css);
watch('src/scripts/**/*', js);
watch('src/img/**/*', series(img, svg));

exports.html = series(cleanHTML, html);
exports.css = series(cleanCss, css);
exports.img = series(cleanImg, img);
exports.svg = series(cleanSvg, svg);
exports.fonts = fonts;
exports.cleaner = clean;
exports.js = js;

exports.watcher = watcher;

exports.default = series(clean, fonts, html, css, svg, img, js, watcher);
// exports.build = series(clean, fonts, html, css, svg, img, js, watcher);
