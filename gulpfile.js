'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  rigger = require('gulp-rigger'),
  browserSync = require("browser-sync"),
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
    js: 'build/js/'
  },
  src: { 
    vendors: 'vendors.js',
    js: 'app.js'
  },
  clean: './build'
};

gulp.task('js:build', function () {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('vendors:build', function () {
  gulp.src(path.src.vendors)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['js:build', 'vendors:build', 'webserver']);