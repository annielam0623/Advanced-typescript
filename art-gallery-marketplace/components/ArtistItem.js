"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import { Link } from "react-router-dom";
const react_1 = __importDefault(require("react"));
function ArtistItem({ artist }) {
    return (react_1.default.createElement("div", { className: "bg-secondary rounded-4", style: { width: "30vw", height: "40vh", display: "inline-block" } },
        react_1.default.createElement(Link, { style: { textDecoration: "none" }, className: "text-light", to: `/artists/${artist.id}` },
            react_1.default.createElement("img", { style: { height: "20vh", width: "25vw" }, src: artist.image !== "" ? artist.image : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png", alt: "Artist" }),
            react_1.default.createElement("h2", null, artist.name),
            react_1.default.createElement("p", null, artist.bio))));
}
const _default = ArtistItem;
export { _default as default };
