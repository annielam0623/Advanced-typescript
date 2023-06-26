"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const ArtGallery_1 = __importDefault(require("./components/ArtGallery"));
const Footer_1 = __importDefault(require("./components/Footer"));
const JoinUs_1 = __importDefault(require("./components/JoinUs"));
const ArtistGallery_1 = __importDefault(require("./components/ArtistGallery"));
const ArtistContainer_1 = __importDefault(require("./components/ArtistContainer"));
const CartView_1 = __importDefault(require("./components/CartView"));
const EditArtist_1 = __importDefault(require("./components/EditArtist"));
const HomeView_1 = __importDefault(require("./components/HomeView"));
const EditCommission_1 = __importDefault(require("./components/EditCommission"));
const CommissionsView_1 = __importDefault(require("./components/CommissionsView"));
const DeleteArtistView_1 = __importDefault(require("./components/DeleteArtistView"));
const ArtworkView_1 = __importDefault(require("./components/ArtworkView"));
const NewArtwork_1 = __importDefault(require("./components/NewArtwork"));
const EditArtwork_1 = __importDefault(require("./components/EditArtwork"));
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement("div", { className: "App bg-dark" },
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(HomeView_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artists", element: react_1.default.createElement(ArtistGallery_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artists/:id/", element: react_1.default.createElement(ArtistContainer_1.default, null) },
                react_1.default.createElement(react_router_dom_1.Route, { path: '', element: react_1.default.createElement(CommissionsView_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: 'commission/update/:commissionId', element: react_1.default.createElement(EditCommission_1.default, null) })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artists/update/:id", element: react_1.default.createElement(EditArtist_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artists/delete/:id", element: react_1.default.createElement(DeleteArtistView_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artworks", element: react_1.default.createElement(ArtGallery_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artworks/:id", element: react_1.default.createElement(ArtworkView_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artworks/update/:id", element: react_1.default.createElement(EditArtwork_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/join-us", element: react_1.default.createElement(JoinUs_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/artwork-form/:id", element: react_1.default.createElement(NewArtwork_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/cart", element: react_1.default.createElement(CartView_1.default, null) })),
        react_1.default.createElement(Footer_1.default, null)));
}
exports.default = App;
