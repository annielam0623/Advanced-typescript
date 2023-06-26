"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = __importDefault(require("../ui-kit/Input"));
const TextArea_1 = __importDefault(require("../ui-kit/TextArea"));
const useFormHandler_1 = __importDefault(require("../custom-hooks/useFormHandler"));
import "../css/new-artist-form.css";
const react_1 = __importDefault(require("react"));
function ArtistForm(props) {
    const { legend, onSubmit, formInputs } = props;
    const { inputs, handleChange } = (0, useFormHandler_1.default)(formInputs);
    return react_1.default.createElement("div", null,
        react_1.default.createElement("form", { onSubmit: onSubmit },
            react_1.default.createElement("legend", null, legend),
            react_1.default.createElement("fieldset", { className: 'quad' },
                react_1.default.createElement(Input_1.default, { label: 'Name', name: 'name', value: inputs.name, onChange: handleChange, required: true }),
                react_1.default.createElement(Input_1.default, { label: 'Style', name: 'style', value: inputs.style, onChange: handleChange, required: true }),
                react_1.default.createElement(Input_1.default, { label: 'Email', name: 'email', type: 'email', value: inputs.email, onChange: handleChange, required: true }),
                react_1.default.createElement(Input_1.default, { label: 'Phone', name: 'phone', pattern: '\\d{3}-\\d{3}-\\d{4}', value: inputs.phone, onChange: handleChange, required: true })),
            react_1.default.createElement(TextArea_1.default, { label: 'Bio', name: 'bio', value: inputs.bio, onChange: handleChange, required: true, rows: 5 }),
            react_1.default.createElement(Input_1.default, { label: 'Profile Image', name: 'image', value: inputs.image, onChange: handleChange }),
            react_1.default.createElement("button", { className: "btn btn-light", type: 'submit' }, "Submit")));
}
const _default = ArtistForm;
export { _default as default };
