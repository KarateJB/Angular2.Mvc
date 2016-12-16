System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductTypeEnum;
    return {
        setters: [],
        execute: function () {
            (function (ProductTypeEnum) {
                ProductTypeEnum[ProductTypeEnum["Book"] = 1] = "Book";
                ProductTypeEnum[ProductTypeEnum["Toy"] = 2] = "Toy";
                ProductTypeEnum[ProductTypeEnum["Music"] = 3] = "Music";
            })(ProductTypeEnum || (ProductTypeEnum = {}));
            exports_1("ProductTypeEnum", ProductTypeEnum);
        }
    };
});
//# sourceMappingURL=ProductTypeEnum.js.map