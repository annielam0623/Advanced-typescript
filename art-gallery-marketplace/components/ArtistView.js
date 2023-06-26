"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import "./css/artistpage.css";
const Carousel_1 = __importDefault(require("./Carousel"));
import { createElement } from "react";
function ArtistView({ artist }) {
    var _a;
    return createElement("div", { className: 'artist-container' },
        createElement("h1", { className: "text-light" }, artist.name),
        createElement("img", { style: { 'borderRadius': '50%', 'marginLeft': 'auto', 'marginRight': 'auto' }, src: artist.image, className: 'center', alt: "Artist" }),
        createElement("p", { className: "text-light view-para" }, artist.bio),
        createElement("h3", { className: "text-light" }, artist.style),
        createElement("h2", { className: "text-light" },
            artist.name,
            "'s Images"),
        !((_a = artist === null || artist === void 0 ? void 0 : artist.artworks) === null || _a === void 0 ? void 0 : _a.length)
            ? createElement("div", null, "This artist has not posted any work yet.")
            : createElement(Carousel_1.default, { artworks: artist.artworks }));
}
const _default = ArtistView;
export { _default as default };
