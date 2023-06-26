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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Carousel_1 = __importDefault(require("react-bootstrap/Carousel"));
import "../app.css";
import { Link } from "react-router-dom";
function ArtCarousel({ artworks }) {
    const [index, setIndex] = (0, react_1.useState)(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return react_1.default.createElement(Carousel_1.default, { className: "mx-auto w-75 p-5 shadow p-3 bg-secondary mt-5 rounded-4", activeIndex: index, onSelect: handleSelect }, artworks.map((slide) => {
        return react_1.default.createElement(Carousel_1.default.Item, { className: "carouselItem", interval: 5000, key: slide._id },
            react_1.default.createElement(Link, { to: `/artworks/${slide._id}` },
                react_1.default.createElement("img", { className: "d-block w-100", src: slide.pic, alt: "slider imag" }),
                react_1.default.createElement(Carousel_1.default.Caption, { className: "w-10 h-10 bg-dark opacity-75 rounded-4" },
                    react_1.default.createElement("h3", null, slide.title),
                    react_1.default.createElement("p", { style: { textAlign: "center" } }, slide.description))));
    }));
}
const _default = ArtCarousel;
export { _default as default };
