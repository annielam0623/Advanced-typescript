"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Input(props) {
    const { label, className, type, value, onChange, required } = props, rest = __rest(props, ["label", "className", "type", "value", "onChange", "required"]);
    const classes = `input ${className}`;
    const inputType = type ? type : 'text';
    return React.createElement("label", { className: 'label' },
        label,
        required && React.createElement("span", { className: 'required' }, " * "),
        React.createElement("input", Object.assign({ type: inputType, className: classes, required: required, value: value, onChange: onChange }, rest)));
}
const _default = Input;
export { _default as default };
