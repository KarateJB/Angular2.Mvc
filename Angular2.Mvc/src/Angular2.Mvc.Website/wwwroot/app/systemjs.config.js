System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    map: {
        'rxjs': 'lib-npm/rxjs',
        '@angular': 'lib-npm/angular2'
    },
    //paths: {
    //    'lib-npm/angular2/*': 'lib-npm/angular2/*'
    //},
    //meta: {
    //    '@angular/*': { 'format': 'cjs' }
    //},
    packages: {
        'rxjs': { main: 'Rx.js' },
        '@angular/router': { main: 'router.umd.min.js'},
        '@angular/core': { main: 'core.umd.min.js' },
        '@angular/common': { main: 'common.umd.min.js' },
        '@angular/compiler': { main: 'compiler.umd.min.js' },
        '@angular/forms': { main: 'forms.umd.js' },
        '@angular/platform-browser': { main: 'platform-browser.umd.min.js' },
        '@angular/platform-browser-dynamic': { main: 'platform-browser-dynamic.umd.min.js' }
    }
});