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
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
function EditCommission() {
    const { put } = (0, useFetch_1.default)();
    const navigate = (0, useNavigate)();
    const params = (0, useParams)();
    const { artist } = (0, useOutletContext)();
    const commission = artist
        ? artist.commissions.find(c => c._id === params.commissionId)
        : {};
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const { name, title, description, price, due_date } = e.target;
        yield put(`/commissions/${params.commissionId}`, {
            name: name.value,
            artist: artist._id,
            title: title.value,
            description: description.value,
            price: price.value,
            due_date: due_date.value
        });
        navigate(`/artists/${artist._id}`);
    });
    return React.createElement(React.Fragment, null,
        React.createElement(CommissionForm_1.default, { legend: 'Update Commission', onSubmit: handleSubmit, formInputs: {
                name: commission.name,
                description: commission.description,
                title: commission.title,
                price: commission.price,
                due_date: commission.due_date
            } }));
}
const _default = EditCommission;
export { _default as default };
