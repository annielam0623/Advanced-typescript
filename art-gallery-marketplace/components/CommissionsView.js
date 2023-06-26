"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import { useOutletContext } from "react-router-dom";
const CommissionGallery_1 = __importDefault(require("./CommissionGallery"));
const NewCommission_1 = __importDefault(require("./NewCommission"));
function CommissionsView() {
    const { artist } = (0, useOutletContext)();
    return React.createElement(React.Fragment, null,
        React.createElement("h2", { style: { textAlign: "center" } }, "Artist's Current Commissions:"),
        React.createElement(CommissionGallery_1.default, { commissions: artist.commissions }),
        React.createElement(NewCommission_1.default, null));
}
const _default = CommissionsView;
export { _default as default };
