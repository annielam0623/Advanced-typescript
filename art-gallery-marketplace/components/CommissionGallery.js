"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommissionItem_1 = __importDefault(require("./CommissionItem"));
import "./css/commissions.css";
function CommissionGallery({ commissions }) {
    return React.createElement("div", { className: "p-3 commission-card bg-light rounded-4" },
        React.createElement("div", { className: "commission-container" }, !(commissions === null || commissions === void 0 ? void 0 : commissions.length)
            ? React.createElement("h1", { className: "text-center text-dark" }, "This artist currently has no commissions.")
            : commissions.map(commission => {
                return React.createElement(CommissionItem_1.default, { commission: commission, key: commission._id });
            })));
}
const _default = CommissionGallery;
export { _default as default };
