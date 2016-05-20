'use strict';

var gulp = require('gulp'),
  rigger = require('gulp-rigger'),
  browserSync = require("browser-sync"),
  sourcemaps = require('gulp-sourcemaps'),
  cssmin = require('gulp-minify-css'),
  reload = browserSync.reload;

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Test table task: Volodymyr Samoilov"
};

var path = {
  build: {
    js: 'build/js/',
    css: 'build/styles/'
  },
  src: { 
    vendors: 'vendors.js',
    js: 'app.js',
    css: 'app.css'
  },
  clean: './build'
};

gulp.task('js:build', function () {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
});

gulp.task('vendors:build', function () {
  gulp.src(path.src.vendors)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
});

gulp.task('css:build', function () {
  gulp.src(path.src.css)
    .pipe(sourcemaps.init())
    
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['js:build', 'vendors:build', 'css:build', 'webserver']);