/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";
var gulp = require('gulp');
var root_path = {
    webroot: "./wwwroot/"
}

//library source
root_path.nmSrc = "./node_modules/";
//library destination
root_path.package_lib = root_path.webroot + "lib-npm/"

//rxjs
gulp.task("copy-rxjs", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/bundles/*.*', {
        base: root_path.nmSrc + '/rxjs/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
});
//angular2
gulp.task('copy-angular2', function () {
    return gulp.src(root_path.nmSrc + "/angular2/bundles/**/*.js", {
        base: root_path.nmSrc + '/angular2/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/'));
});
//systemjs
gulp.task('copy-systemjs', function () {
    return gulp.src(root_path.nmSrc + "/systemjs/dist/**/*.*", {
        base: root_path.nmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/systemjs'));
});
//ES6
gulp.task('copy-es6-shim', function () {
    return gulp.src(root_path.nmSrc + "/es6-shim/es6-sh*", {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim'));
});
//sweetalert2
gulp.task('copy-sweetalert2', function () {
    return gulp.src(root_path.nmSrc + "/sweetalert2/dist/sweetalert2*", {
        base: root_path.nmSrc + '/sweetalert2/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/sweetalert2/'));
});

gulp.task("copy-all", ["copy-rxjs", "copy-angular2", "copy-systemjs", "copy-es6-shim", "copy-sweetalert2"])