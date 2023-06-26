"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
const CartItem_1 = __importDefault(require("./CartItem"));
import "./css/cart.css";
function CartView() {
    const { cart } = (0, useContext)(CartContext);
    return React.createElement("div", { className: "cart-container m-2" }, !cart.length
        ? React.createElement("h1", { className: "text-light text-center my-5" }, "Your cart is empty.")
        : React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Your Cart"),
            React.createElement("div", { className: 'text-dark' }, cart.map(item => React.createElement(CartItem_1.default, { key: item.id, item: item }))),
            React.createElement("hr", null),
            React.createElement("h3", { className: 'text-end mx-3' },
                "Total: $",
                cart.reduce((s, i) => s + i.price * i.quantity, 0))));
}
const _default = CartView;
export { _default as default };
