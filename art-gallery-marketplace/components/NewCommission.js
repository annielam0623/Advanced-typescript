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
const useFetch_1 = __importDefault(require("./custom-hooks/useFetch"));
const CommissionForm_1 = __importDefault(require("./forms/CommissionForm"));
import { useNavigate, useOutletContext } from "react-router-dom";
function NewCommission() {
    const { post } = (0, useFetch_1.default)();
    const navigate = (0, useNavigate)();
    const { artist } = (0, useOutletContext)();
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const { name, title, description, price, due_date } = e.target;
        yield post('/commissions', {
            name: name.value,
            artist: artist._id,
            title: title.value,
            description: description.value,
            price: price.value,
            due_date: due_date.value
        });
        navigate(0);
    });
    return React.createElement(CommissionForm_1.default, { legend: 'Request A Commission', onSubmit: handleSubmit });
}
const _default = NewCommission;
export { _default as default };
