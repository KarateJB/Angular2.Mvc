System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Utility;
    return {
        setters:[],
        execute: function() {
            (function (Utility) {
                //取得UUID
                function generateUUID() {
                    var d = Date.now();
                    if (window.performance && typeof window.performance.now === "function") {
                        d += performance.now(); //use high-precision timer if available
                    }
                    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = (d + Math.random() * 16) % 16 | 0;
                        d = Math.floor(d / 16);
                        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                    });
                    return uuid;
                }
                Utility.generateUUID = generateUUID;
            })(Utility = Utility || (Utility = {}));
            exports_1("Utility", Utility);
        }
    }
});
//# sourceMappingURL=Utility.js.map