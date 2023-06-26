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
import { useNavigate, Link } from "react-router-dom";
function CommissionItem({ commission }) {
    const { title, name, due_date, price, description, _id } = commission;
    const date = new Date(due_date);
    const dateDisplay = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    const { remove } = (0, useFetch_1.default)();
    const navigate = (0, useNavigate)();
    const handleDelete = () => __awaiter(this, void 0, void 0, function* () {
        yield remove(`/commissions/${_id}`);
        navigate(0);
    });
    return React.createElement("div", { className: "bg-secondary mx-auto w-75 m-2 p-2 text-center" },
        React.createElement("h1", null,
            "Title: ",
            title),
        React.createElement("p", null,
            "Name of requester: ",
            name),
        React.createElement("p", null,
            "Commission due date: ",
            dateDisplay,
            " "),
        React.createElement("p", null,
            "Commission price: ",
            price),
        React.createElement("p", null,
            "Commission description: ",
            description),
        React.createElement("div", { className: "d-flex justify-content-around" },
            React.createElement(Link, { to: `commission/update/${_id}` },
                React.createElement("button", { className: "btn btn-light p-1" }, "Update")),
            React.createElement("button", { className: "btn btn-dark p-1", onClick: handleDelete }, "Delete")));
}
const _default = CommissionItem;
export { _default as default };
