"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
function MainNav() {
    const { cart } = (0, useContext)(CartContext);
    const getClassItem = ({ isActive }) => {
        return `nav-link ${isActive ? 'bg-dark text-light' : ''}`;
    };
    const getClassBrand = ({ isActive }) => {
        return `navbar-brand nav-link ${isActive ? 'bg-dark text-light' : ''}`;
    };
    return React.createElement("nav", { className: "navbar navbar-expand bg-light p-2" },
        React.createElement("div", { className: "container-fluid" },
            React.createElement(NavLink, { style: { padding: 'auto 10px' }, className: getClassBrand, to: "/" },
                React.createElement("img", { width: "27px", height: "27px", src: "./images/Art-Mart-Favicon-2.jpg", alt: "fav" }),
                "\u00A0 Art-Mart"),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                React.createElement("ul", { className: "navbar-nav" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(NavLink, { className: getClassItem, to: "/artists" }, "Artists")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(NavLink, { className: getClassItem, to: "/artworks" }, "Artworks")))),
            React.createElement("div", { className: "search flex mx-5" },
                React.createElement(AiOutlineSearch, { className: 'searchIcon text-dark' }),
                React.createElement("input", { type: 'text', placeholder: 'Search...' })),
            React.createElement(NavLink, { className: "nav-link navbar-right btn btn-dark px-3 py-2", to: "/cart" },
                "Cart ",
                !cart.length ? '' : `(${cart.reduce((s, i) => s + i.quantity, 0)})`)));
}
const _default = MainNav;
export { _default as default };
