"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = __importDefault(require("../ui-kit/Input"));
const TextArea_1 = __importDefault(require("../ui-kit/TextArea"));
import "../css/commission-form.css";
const useFormHandler_1 = __importDefault(require("../custom-hooks/useFormHandler"));
function CommissionForm(props) {
    const { legend, onSubmit, formInputs } = props;
    const fI = formInputs ? formInputs : {
        name: '',
        description: '',
        title: '',
        price: 0,
        due_date: ''
    };
    const { inputs, handleChange } = (0, useFormHandler_1.default)(fI);
    return React.createElement("div", { className: 'form-container' },
        React.createElement("form", { onSubmit: onSubmit },
            React.createElement("legend", null, legend),
            React.createElement(Input_1.default, { label: 'Name', name: 'name', value: inputs.name, onChange: handleChange, required: true }),
            React.createElement(Input_1.default, { label: 'Title', name: 'title', value: inputs.title, onChange: handleChange }),
            React.createElement(TextArea_1.default, { label: 'Description', name: 'description', value: inputs.description, onChange: handleChange, required: true, rows: 5 }),
            React.createElement("fieldset", { className: "double" },
                React.createElement(Input_1.default, { label: 'Asking Price', type: 'number', name: 'price', value: inputs.price, onChange: handleChange }),
                React.createElement(Input_1.default, { label: 'Due Date', type: 'date', name: 'due_date', value: inputs.due_date, onChange: handleChange })),
            React.createElement("button", { className: "btn btn-light", type: "submit" }, "Submit")));
}
const _default = CommissionForm;
export { _default as default };
