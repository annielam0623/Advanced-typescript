"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
function CartItem({ item }) {
    const { title, pic, description, price, quantity } = item;
    const { handleCartRemove } = (0, useContext)(CartContext);
    return React.createElement("div", { className: "cart-item bg-light rounded-end my-3" },
        React.createElement("div", { className: "mh-100 item-img-container" },
            React.createElement(Link, { to: `/artworks/${item._id}` },
                React.createElement("img", { src: pic, alt: title, className: "item-img" }))),
        React.createElement("div", { className: "item-details p-2" },
            React.createElement("h3", { className: "d-inline" }, title),
            React.createElement("button", { className: 'd-inline float-end bg-dark text-light', onClick: () => handleCartRemove(item) }, "Remove"),
            React.createElement("p", { className: 'h-50 p-1 my-1 item-description border-dark-subtle' }, description),
            React.createElement("span", { className: "float-start mt-2 fs-5" },
                "Price: $",
                price),
            React.createElement("span", { className: "float-end mt-2 fs-5" },
                "Quantity: ",
                quantity)));
}
const _default = CartItem;
export { _default as default };
