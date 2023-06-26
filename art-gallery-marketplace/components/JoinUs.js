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
import { useNavigate } from "react-router-dom";
const react_1 = __importDefault(require("react"));
function JoinUs() {
    const { post } = (0, useFetch_1.default)();
    const navigate = (0, useNavigate)();
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const { name, phone, email, image, style, bio } = e.target;
        yield post('/artists', {
            name: name.value,
            phone: phone.value,
            email: email.value,
            image: image.value,
            style: style.value,
            bio: bio.value
        });
        navigate('/artists');
    });
    return react_1.default.createElement("div", { className: 'join-us' },
        react_1.default.createElement("h2", null, "Join Us"),
        react_1.default.createElement("p", null, "Sell your beautiful art on our website today!"),
        react_1.default.createElement(ArtistForm_1.default, { legend: 'New Artist Application', onSubmit: handleSubmit, formInputs: {
                name: '',
                phone: '',
                email: '',
                image: '',
                style: '',
                bio: ''
            } }));
}
const _default = JoinUs;
export { _default as default };
