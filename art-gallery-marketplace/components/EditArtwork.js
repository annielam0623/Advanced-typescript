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
const ArtworkForm_1 = __importDefault(require("./forms/ArtworkForm"));
const useFetch_1 = __importDefault(require("./custom-hooks/useFetch"));
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function EditArtwork() {
    const { get, put } = (0, useFetch_1.default)();
    const params = (0, useParams)();
    const navigate = (0, useNavigate)();
    const [artwork, setArtwork] = (0, useState)({});
    (0, useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const data = yield get(`/artworks/${params.id}`);
            setArtwork(data);
        }))();
    }, []);
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const { title, pic, description, price, year, style, size, copies } = e.target;
        yield put(`/artworks/${params.id}`, {
            title: title.value,
            pic: pic.value,
            artist: artwork.artist,
            description: description.value,
            price: price.value,
            year: year.value,
            style: style.value,
            size: size.value,
            sold: false,
            copies: copies.value
        });
        navigate(`/artists/${artwork.artist}`);
    });
    return React.createElement("div", null,
        React.createElement("h1", { className: 'text-secondary', style: { textAlign: "center" } }, "Update Artwork"),
        !artwork.title
            ? React.createElement(React.Fragment, null)
            : React.createElement(ArtworkForm_1.default, { onSubmit: handleSubmit, formInputs: {
                    title: artwork.title,
                    pic: artwork.pic,
                    artist: artwork.artist,
                    description: artwork.description,
                    price: artwork.price,
                    year: artwork.year,
                    style: artwork.style,
                    size: artwork.size,
                    sold: artwork.sold,
                    copies: artwork.copies
                } }));
}
const _default = EditArtwork;
export { _default as default };
