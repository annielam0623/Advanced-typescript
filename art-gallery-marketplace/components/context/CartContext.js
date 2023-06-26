"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartContext = void 0;
const react_1 = require("react");
exports.CartContext = react_1.createContext([]);
function CartProvider({ children }) {
    var _a;
    const [cart, setCart] = (0, useState)((_a = JSON.parse(localStorage.getItem('cart'))) !== null && _a !== void 0 ? _a : []);
    (0, useEffect)(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const handleCartAdd = newItem => {
        const cartFilter = cart.filter(item => item._id === newItem._id);
        cartFilter.length === 0
            ? setCart(prev => [...prev, Object.assign(Object.assign({}, newItem), { quantity: 1 })])
            : setCart(prev => prev.map(item => {
                return item._id === newItem._id
                    ? Object.assign(Object.assign({}, item), { quantity: item.quantity + 1 }) : item;
            }));
    };
    const handleCartRemove = item => {
        setCart(prev => prev.filter(i => i._id !== item._id));
    };
    return React.createElement(CartContext.Provider, { value: { cart, handleCartAdd, handleCartRemove } }, children);
}
const _default = CartProvider;
export { _default as default };
