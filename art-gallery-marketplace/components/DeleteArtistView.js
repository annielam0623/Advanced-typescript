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
import { useParams, useNavigate, Link } from "react-router-dom";
function DeleteArtistView() {
    const params = (0, useParams)();
    const { remove } = (0, useFetch_1.default)();
    const navigate = (0, useNavigate)();
    function handleDelete() {
        return __awaiter(this, void 0, void 0, function* () {
            yield remove(`/artists/${params.id}`);
            navigate(`/artists`);
        });
    }
    return React.createElement("div", { className: "bg-dark text-secondary", style: { minHeight: "70vh" } },
        React.createElement("div", { className: "card", style: { width: "50vw", margin: "auto", marginTop: "35vh" } },
            React.createElement("div", { className: "card-body text-center" },
                React.createElement("h2", null, "Are you sure you want to delete artist?"),
                React.createElement("div", { className: "d-flex justify-content-center gap-5 " },
                    React.createElement("button", { className: "btn btn-danger", onClick: handleDelete }, "Yes"),
                    React.createElement(Link, { to: `/artists/${params.id}` },
                        React.createElement("button", { className: "btn btn-light" }, "No"))))));
}
const _default = DeleteArtistView;
export { _default as default };
