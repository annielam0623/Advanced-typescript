"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = __importDefault(require("../ui-kit/Input"));
const TextArea_1 = __importDefault(require("../ui-kit/TextArea"));
const useFormHandler_1 = __importDefault(require("../custom-hooks/useFormHandler"));
function ArtworkForm(props) {
    const { legend, onSubmit, formInputs } = props;
    const fI = formInputs ? formInputs : {
        title: '',
        pic: '',
        artist: '',
        description: '',
        price: 0,
        year: '',
        style: '',
        size: '',
        sold: false,
        copies: 1
    };
    const { inputs, handleChange } = (0, useFormHandler_1.default)(fI);
    return React.createElement("form", { onSubmit: onSubmit },
        React.createElement("legend", null, legend),
        React.createElement("fieldset", { className: 'quad' },
            React.createElement(Input_1.default, { label: 'Title', name: 'title', value: inputs.title, onChange: handleChange, required: true }),
            React.createElement(Input_1.default, { label: 'Price', name: 'price', type: 'number', value: inputs.price, onChange: handleChange, required: true }),
            React.createElement(Input_1.default, { label: 'Year', name: 'year', type: 'month', value: inputs.year, onChange: handleChange }),
            React.createElement(Input_1.default, { label: 'Style', name: 'style', value: inputs.style, onChange: handleChange })),
        React.createElement("fieldset", { className: 'double' },
            React.createElement(Input_1.default, { label: 'Size', name: 'size', value: inputs.size, onChange: handleChange, required: true }),
            React.createElement(Input_1.default, { label: 'Copies', name: 'copies', type: 'number', value: inputs.copies, onChange: handleChange })),
        React.createElement(Input_1.default, { label: 'Image Url', name: 'pic', value: inputs.pic, onChange: handleChange, required: true }),
        React.createElement(TextArea_1.default, { label: 'Description', name: 'description', value: inputs.description, onChange: handleChange, required: true, rows: 5 }),
        React.createElement("button", { className: "btn btn-light", type: 'submit' }, "Submit"));
}
const _default = ArtworkForm;
export { _default as default };
