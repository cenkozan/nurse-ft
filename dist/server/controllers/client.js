"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../models/client");
var base_1 = require("./base");
var ClientCtrl = (function (_super) {
    __extends(ClientCtrl, _super);
    function ClientCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = client_1.default;
        return _this;
    }
    return ClientCtrl;
}(base_1.default));
exports.default = ClientCtrl;
//# sourceMappingURL=client.js.map