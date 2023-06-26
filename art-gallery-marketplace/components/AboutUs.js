"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import { Link } from "react-router-dom";
const react_1 = __importDefault(require("react"));
function AboutUs() {
    return (react_1.default.createElement("div", { className: "bg-dark text-secondary" },
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { className: "card", style: { width: "75vw", height: "75vh", margin: "auto" } },
            react_1.default.createElement("img", { src: "https://www.aaa.si.edu/sites/default/files/place-easel-side-table-albert-bloch-extra-large.jpg", alt: "Card cap", style: { width: "70%", height: "40vh", margin: "auto" } }),
            react_1.default.createElement("div", { className: "card-body" },
                react_1.default.createElement("hr", null),
                react_1.default.createElement("h5", { className: "card-title" }, "About Us:"),
                react_1.default.createElement("p", { className: "card-text" }, "Our vision at Art-Mart is to bring together both artists and art-lovers, to a place where we can all appreciate one passion. We have provided a platform for artist's to gain exposure and sell their pieces, and for the rest of us to find new tastes and maybe even a new decorative piece for our home! We encourage all artist's to show off their work on our website."),
                react_1.default.createElement(Link, { to: "/artworks", className: "btn btn-dark" }, "Let's Browse!")))));
}
const _default = AboutUs;
export { _default as default };
