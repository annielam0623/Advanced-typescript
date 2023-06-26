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
const ArtistForm_1 = __importDefault(require("./forms/ArtistForm"));
const useFetch_1 = __importDefault(require("./custom-hooks/useFetch"));
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EditArtist() {
    const params = (0, useParams)();
    const { get, put } = (0, useFetch_1.default)();
    const [artist, setArtist] = (0, useState)({});
    (0, useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const data = yield get(`/artists/${params.id}`);
            setArtist(data);
        }))();
    });
    const handleSubmit = e => {
        e.preventDefault();
        const { name, phone, email, image, style, bio } = e.target;
        put(`/artists/${params.id}`, {
            name: name.value,
            phone: phone.value,
            email: email.value,
            image: image.value,
            style: style.value,
            bio: bio.value
        });
    };
    return React.createElement("div", null,
        React.createElement("h1", null, "Update Your Profile"),
        !artist.name
            ? React.createElement(React.Fragment, null)
            : React.createElement(ArtistForm_1.default, { onSubmit: handleSubmit, formInputs: {
                    name: artist.name,
                    phone: artist.phone,
                    email: artist.email,
                    image: artist.image,
                    style: artist.style,
                    bio: artist.bio
                } }));
}
const _default = EditArtist;
export { _default as default };
