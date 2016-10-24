System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    map: {
        'rxjs': 'lib-npm/rxjs',
        '@angular': 'lib-npm/angular2',
        'service': 'app/service',
        'class': 'app/class'
    },
    paths: {
        "service:*": "app/service/*.js",
        "class:*": "app/class/*.js"
    },
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
        '@angular/http': { main: 'http.umd.js' },
        '@angular/platform-browser': { main: 'platform-browser.umd.min.js' },
        '@angular/platform-browser-dynamic': { main: 'platform-browser-dynamic.umd.min.js' },
        'service': { main: '*.js', defaultExtension: 'js' },
        'class': { main: '*.js', defaultExtension:'js'}
    }
});