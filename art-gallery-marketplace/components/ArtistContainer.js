"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtistView_1 = __importDefault(require("./ArtistView"));
import { Link, Outlet } from "react-router-dom";
const react_1 = __importStar(require("react"));
import { useParams } from "react-router-dom";
const useFetch_1 = __importDefault(require("./custom-hooks/useFetch"));
function ArtistContainer() {
    const { get } = (0, useFetch_1.default)();
    const [data, setData] = (0, react_1.useState)([]);
    const params = (0, useParams)();
    (0, react_1.useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const data = yield get(`/artists/${params.id}`);
            setData(data);
        }))();
        // eslint-disable-next-line
    }, []);
    return react_1.default.createElement("div", null, !data
        ? react_1.default.createElement(react_1.default.Fragment, null, "Loading ...")
        : react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ArtistView_1.default, { artist: data }),
            react_1.default.createElement("h3", { style: { textAlign: "center" }, className: "text-secondary mt-3" },
                "Click \u00A0",
                react_1.default.createElement(Link, { to: `/artwork-form/${data._id}`, className: "btn btn-primary" }, "Here"),
                "\u00A0 to add more artwork to your page!"),
            react_1.default.createElement("hr", null),
            react_1.default.createElement(Outlet, { context: { artist: data } }),
            react_1.default.createElement("div", { className: "d-flex justify-content-center gap-3" },
                react_1.default.createElement(Link, { to: `/artists/update/${params.id}` },
                    react_1.default.createElement("button", { className: "btn btn-primary" }, "Update Profile")),
                react_1.default.createElement(Link, { to: `/artists/delete/${params.id}` },
                    react_1.default.createElement("button", { className: "btn btn-danger" }, "Delete Profile")))));
}
const _default = ArtistContainer;
export { _default as default };
