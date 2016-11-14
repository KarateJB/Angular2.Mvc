System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FirebaseConfig;
    return {
        setters:[],
        execute: function() {
            (function (FirebaseConfig) {
                var config;
                function Get() {
                    config = {
                        apiKey: "AIzaSyCZzDE0KS0jj4WIW424-92w86lerFaLiKU",
                        authDomain: "fir-e1a22.firebaseapp.com",
                        databaseURL: "https://fir-e1a22.firebaseio.com",
                        storageBucket: "fir-e1a22.appspot.com",
                        messagingSenderId: "499014936125"
                    };
                    return config;
                }
                FirebaseConfig.Get = Get;
            })(FirebaseConfig = FirebaseConfig || (FirebaseConfig = {}));
            exports_1("FirebaseConfig", FirebaseConfig);
        }
    }
});
//# sourceMappingURL=FirebaseConfig.js.map