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
import "./css/images.css";
const useFetch_1 = __importDefault(require("./custom-hooks/useFetch"));
const react_1 = __importStar(require("react"));
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
function ArtworkView() {
    var _a;
    const { handleCartAdd } = (0, react_1.useContext)(CartContext);
    const { get, remove } = (0, useFetch_1.default)();
    const [image, setImage] = (0, react_1.useState)(null); // Set type assertion for image state
    const [artist, setArtist] = (0, react_1.useState)([]);
    const params = (0, useParams)();
    const navigate = (0, useNavigate)();
    const handleDelete = () => __awaiter(this, void 0, void 0, function* () {
        yield remove(`/artworks/${params.id}`);
        navigate('/artworks');
    });
    (0, react_1.useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const imageData = yield get(`/artworks/${params.id}`);
            setImage(imageData);
        }))();
    }, [get, params.id, image]);
    // This could be avoided with some backend changes, works as a temp fix
    (0, react_1.useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            if (image && image.artist) {
                const artistData = yield get(`/artists/${image.artist}`);
                setArtist(artistData);
            }
        }))();
    }, [get, params.id]);
    return react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: 'd-flex' },
            react_1.default.createElement("div", { className: 'art-container' },
                react_1.default.createElement("img", { style: { 'marginLeft': 'auto', 'marginRight': 'auto', 'float': 'left', 'height': '100%', 'width': '100%' }, src: image === null || image === void 0 ? void 0 : image.pic, className: 'center', alt: "Imge" })),
            react_1.default.createElement("div", { className: 'art-container my-5' },
                react_1.default.createElement("h1", { className: "text-light" }, image === null || image === void 0 ? void 0 : image.title),
                react_1.default.createElement("p", { className: "text-light view-para" }, image === null || image === void 0 ? void 0 : image.description),
                react_1.default.createElement("h3", { className: "text-light" }, (_a = artist[0]) === null || _a === void 0 ? void 0 : _a.name),
                react_1.default.createElement("h5", { className: "text-light" },
                    "Size: ", image === null || image === void 0 ? void 0 :
                    image.size),
                react_1.default.createElement("h5", { className: "text-light" },
                    "Year: ", image === null || image === void 0 ? void 0 :
                    image.year),
                react_1.default.createElement("h5", { className: "text-light" },
                    "Style: ", image === null || image === void 0 ? void 0 :
                    image.style),
                react_1.default.createElement("h5", { className: "text-light" },
                    "Price: $", image === null || image === void 0 ? void 0 :
                    image.price),
                react_1.default.createElement("h5", { className: "text-light" },
                    "Copies: ", image === null || image === void 0 ? void 0 :
                    image.copies),
                react_1.default.createElement("h5", { className: "text-light" },
                    "Sold: ", image === null || image === void 0 ? void 0 :
                    image.sold),
                react_1.default.createElement("button", { className: "btn btn-primary", onClick: () => handleCartAdd(image) }, "Add to cart"))),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { className: "d-flex justify-content-center gap-3" },
            react_1.default.createElement(Link, { to: `/artworks/update/${params.id}` },
                react_1.default.createElement("button", { className: "btn btn-primary" }, "Update Profile")),
            react_1.default.createElement("button", { className: "btn btn-danger", onClick: handleDelete }, "Delete Artwork")));
}
const _default = ArtworkView;
export { _default as default };
