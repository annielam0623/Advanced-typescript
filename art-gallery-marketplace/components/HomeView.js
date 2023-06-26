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
const Carousel_1 = __importDefault(require("./Carousel"));
const AboutUs_1 = __importDefault(require("./AboutUs"));
const useFetch_1 = __importDefault(require("./custom-hooks/useFetch"));
import { useState, useEffect } from "react";
const react_2 = __importDefault(require("react"));
function HomeView() {
    const { get } = (0, useFetch_1.default)();
    const [data, setData] = (0, useState)([]);
    (0, useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const data = yield get(`/artworks/`);
            setData(data);
        }))();
    });
    return react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(Carousel_1.default, { artworks: data }),
        react_2.default.createElement(AboutUs_1.default, null));
}
const _default = HomeView;
export { _default as default };
