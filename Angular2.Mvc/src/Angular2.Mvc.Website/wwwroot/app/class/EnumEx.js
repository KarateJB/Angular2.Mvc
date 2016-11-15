System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EnumEx;
    return {
        setters:[],
        execute: function() {
            //Enum extensions (Reference: http://stackoverflow.com/a/21294925/7045253)
            EnumEx = (function () {
                function EnumEx() {
                }
                EnumEx.getNamesAndValues = function (e) {
                    return EnumEx.getNames(e).map(function (n) { return ({ name: n, value: e[n] }); });
                };
                EnumEx.getNames = function (e) {
                    return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "string"; });
                };
                EnumEx.getValues = function (e) {
                    return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "number"; });
                };
                EnumEx.getObjValues = function (e) {
                    return Object.keys(e).map(function (k) { return e[k]; });
                };
                return EnumEx;
            }());
            exports_1("EnumEx", EnumEx);
        }
    }
});
//# sourceMappingURL=EnumEx.js.map