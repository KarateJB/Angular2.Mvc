System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SysEvent;
    return {
        setters:[],
        execute: function() {
            SysEvent = (function () {
                function SysEvent(fields) {
                    this.CreateOn = new Date();
                    if (fields)
                        Object.assign(this, fields);
                }
                return SysEvent;
            }());
            exports_1("SysEvent", SysEvent);
        }
    }
});
//# sourceMappingURL=SysEvent.js.map