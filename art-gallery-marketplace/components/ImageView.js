"use strict";
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
import { useState, useEffect } from "react";
const react_2 = __importDefault(require("react"));
function ImageView({ image }) {
    const { get } = (0, useFetch_1.default)();
    const [artist, setArtist] = (0, useState)([]);
    (0, useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const artist = yield get(`/artists/${image.artist}`);
            setArtist(artist);
        }))();
    });
    return (react_2.default.createElement("div", { className: "bg-secondary rounded-4", style: { width: "30vw", height: '100%', display: "inline-block", } },
        react_2.default.createElement("h1", { className: "text-light" }, image.title),
        react_2.default.createElement("img", { style: { margin: 'auto' }, src: image.pic, className: 'center', alt: "Imag" }),
        !artist
            ? react_2.default.createElement(react_2.default.Fragment, null, "Loading ...")
            : react_2.default.createElement("h3", { className: "text-light" }, artist)));
}
const _default = ImageView;
export { _default as default };
