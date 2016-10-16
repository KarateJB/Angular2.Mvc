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
    return gulp.src(root_path.nmSrc + '/rxjs/**/*.js', {
            base: root_path.nmSrc + '/rxjs/'
            }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
    });

//reflect-metadata
gulp.task("copy-reflect-metadata", function () {
    return gulp.src(root_path.nmSrc + '/reflect-metadata/*.js', {
            base: root_path.nmSrc + '/reflect-metadata/'
            }).pipe(gulp.dest(root_path.package_lib + '/reflect-metadata/'));
    });

        //zone.js
gulp.task("copy-zonejs", function() {
    return gulp.src(root_path.nmSrc + '/zone.js/dist/**/*.js', {
            base: root_path.nmSrc + '/zone.js/dist/'
            }).pipe(gulp.dest(root_path.package_lib + '/zone.js/'));
    });


        //angular2
gulp.task('copy-ng2-common', function () {
    return gulp.src(root_path.nmSrc + "/@angular/common/bundles/**/*.js", {
            base: root_path.nmSrc + '/@angular/common/bundles/'
            }).pipe(gulp.dest(root_path.package_lib + '/angular2/common/'));
    });
gulp.task('copy-ng2-compiler', function () {
    return gulp.src(root_path.nmSrc + "/@angular/compiler/bundles/**/*.js", {
            base: root_path.nmSrc + '/@angular/compiler/bundles/'
            }).pipe(gulp.dest(root_path.package_lib + '/angular2/compiler/'));
    });
gulp.task('copy-ng2-core', function() {
    return gulp.src(root_path.nmSrc + "/@angular/core/bundles/**/*.js", {
            base: root_path.nmSrc + '/@angular/core/bundles/'
            }).pipe(gulp.dest(root_path.package_lib + '/angular2/core/'));
    });
gulp.task('copy-ng2-http', function() {
    return gulp.src(root_path.nmSrc + "/@angular/http/bundles/**/*.js", {
            base: root_path.nmSrc + '/@angular/http/bundles/'
            }).pipe(gulp.dest(root_path.package_lib + '/angular2/http/'));
    });
gulp.task('copy-ng2-router', function () {
    return gulp.src(root_path.nmSrc + "/@angular/router/bundles/**/*.js", {
            base: root_path.nmSrc + '/@angular/router/bundles/'
            }).pipe(gulp.dest(root_path.package_lib + '/angular2/router/'));
    });
gulp.task('copy-ng2-platform-browser', function () {
    return gulp.src(root_path.nmSrc + "/@angular/platform-browser/bundles/**/*.js", {
            base: root_path.nmSrc + '/@angular/platform-browser/bundles/'
            }).pipe(gulp.dest(root_path.package_lib + '/angular2/platform-browser/'));
    });
gulp.task('copy-ng2-platform-browser-dynamic', function () {
    return gulp.src(root_path.nmSrc + "/@angular/platform-browser-dynamic/bundles/**/*.js", {
            base: root_path.nmSrc + '/@angular/platform-browser-dynamic/bundles/'
            }).pipe(gulp.dest(root_path.package_lib + '/angular2/platform-browser-dynamic/'));
    });

        //systemjs
gulp.task('copy-systemjs', function() {
    return gulp.src(root_path.nmSrc + "/systemjs/dist/**/*.*", {
            base: root_path.nmSrc + '/systemjs/dist/'
            }).pipe(gulp.dest(root_path.package_lib + '/systemjs'));
    });
//ES6
gulp.task('copy-es6-shim', function() {
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

gulp.task("copy-all", [
    "copy-rxjs",
    "copy-reflect-metadata",
    "copy-zonejs",
    "copy-ng2-common",
    "copy-ng2-compiler",
    "copy-ng2-core",
    "copy-ng2-http",
    "copy-ng2-router",
    "copy-ng2-platform-browser",
    "copy-ng2-platform-browser-dynamic",
    "copy-systemjs",
    "copy-es6-shim",
    "copy-sweetalert2"])