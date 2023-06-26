"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
import "./index.css";
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
import { BrowserRouter } from "react-router-dom";
const CartContext_1 = __importDefault(require("./components/context/CartContext"));
document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        const root = client_1.default.createRoot(rootElement);
        root.render(react_1.default.createElement(BrowserRouter, null,
            react_1.default.createElement(CartContext_1.default, null,
                react_1.default.createElement(App_1.default, null))));
    }
});
(0, reportWebVitals_1.default)(console.log);
