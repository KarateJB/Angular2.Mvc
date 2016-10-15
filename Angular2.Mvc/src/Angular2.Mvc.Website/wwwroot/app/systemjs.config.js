System.config({
    //transpiler: 'typescript',
    //typescriptOptions: { emitDecoratorMetadata: true },
    map: {
        '@angular': 'lib-npm/angular2',
        'rxjs': 'lib-npm/rxjs'
    },
    //paths: {
    //    'lib-npm/angular2/*': 'lib-npm/angular2/*'
    //},
    //meta: {
    //    '@angular/*': { 'format': 'cjs' }
    //},
    packages: {
        //'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'Rx' },
        '@angular/core': { main: 'core.umd.min.js' },
        '@angular/common': { main: 'common.umd.min.js' },
        '@angular/compiler': { main: 'compiler.umd.min.js' },
        '@angular/platform-browser': { main: 'platform-browser.umd.min.js' },
        '@angular/platform-browser-dynamic': { main: 'platform-browser-dynamic.umd.min.js' }
        //'app': { main: 'main.js', defaultExtension: 'js' }
    }
});