"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import { Link } from "react-router-dom";
import "./css/footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const react_1 = __importDefault(require("react"));
function Footer() {
    return react_1.default.createElement("div", { className: "bg-dark text-secondary m-2" },
        react_1.default.createElement("hr", null),
        react_1.default.createElement("h3", { className: 'text-center' }, "Contributors:"),
        react_1.default.createElement("ul", { className: "list-inline text-center" },
            react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                react_1.default.createElement("a", { href: 'https://github.com/annielam0623', target: '_blank', rel: "noreferrer" }, " Annie Lam ")),
            "| \u00A0",
            react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                react_1.default.createElement("a", { href: 'https://www.linkedin.com/in/isaac-saettel-110a76262/', target: '_blank', rel: "noreferrer" }, " Isaac Saettel")),
            "| \u00A0",
            react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                react_1.default.createElement("a", { href: 'https://github.com/leslieportiz', target: '_blank', rel: "noreferrer" }, "Lorraine Ortiz")),
            "| \u00A0",
            react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                react_1.default.createElement("a", { href: 'https://github.com/MalMWare', target: '_blank', rel: "noreferrer" }, "Mal Martin")),
            "| \u00A0",
            react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                react_1.default.createElement("a", { href: 'https://www.linkedin.com/in/zmatero/', target: '_blank', rel: "noreferrer" }, "Zane Matero"))),
        react_1.default.createElement("p", { className: 'left' }, "Copyright \u00A9 2023 Art-Mart Platforms, Inc."),
        react_1.default.createElement("div", { className: 'text-center' },
            react_1.default.createElement("img", { src: './images/FlagIcon.svg', alt: 'US' }),
            react_1.default.createElement("span", null, "\u00A0 United States \u00A0 | \u00A0 English (US) \u00A0 | \u00A0 $ (USD)"),
            react_1.default.createElement("div", { className: "social" },
                react_1.default.createElement(AiFillTwitterCircle, { className: "icon", style: { padding: "auto", margin: "5px" } }),
                react_1.default.createElement(BsFacebook, { className: "icon", style: { padding: "auto", margin: "5px" } }),
                react_1.default.createElement(RiInstagramFill, { className: "icon", style: { padding: "auto", margin: "5px" } }),
                react_1.default.createElement(BsLinkedin, { className: "icon", style: { padding: "auto", margin: "5px" } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("ul", { className: "list-inline" },
                    react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                        react_1.default.createElement("a", { href: "#" }, "Terms of Use")),
                    react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                        react_1.default.createElement("a", { href: "#" }, "Privacy")),
                    react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                        react_1.default.createElement(Link, { to: "join-us" }, "Join Us")),
                    react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                        react_1.default.createElement("a", { href: "#" }, "Local Shops")),
                    react_1.default.createElement("li", { className: "list-unstyled list-inline-item" },
                        react_1.default.createElement("a", { href: "#" }, "Region"))))));
}
const _default = Footer;
export { _default as default };
