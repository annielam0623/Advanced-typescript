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
import { Link } from "react-router-dom";
const useFetch_1 = __importDefault(require("./custom-hooks/useFetch"));
const react_1 = __importStar(require("react"));
const ArtistItem_1 = __importDefault(require("./ArtistItem"));
function ArtistGallery() {
    const { get } = (0, useFetch_1.default)();
    const [data, setData] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const data = yield get('/artists/');
            setData(data);
        }))();
    }, [get]);
    return react_1.default.createElement("div", { className: "m-2" },
        react_1.default.createElement("h1", { className: "text-light", style: { textAlign: "Center" } }, "Artists"),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("h3", { className: "text-secondary", style: { textAlign: "Center" } },
            "Not an artist? Want to be? Click \u00A0",
            react_1.default.createElement(Link, { to: "/join-us", className: "btn btn-primary" }, "Here"),
            "\u00A0 to make your artist page!"),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { className: "grid-container" }, !data.length
            ? react_1.default.createElement(react_1.default.Fragment, null, "Loading ...")
            : data.map(artist => react_1.default.createElement(ArtistItem_1.default, { key: artist.id, artist: artist }))));
}
const _default = ArtistGallery;
export { _default as default };
