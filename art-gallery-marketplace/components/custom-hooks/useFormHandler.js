"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { useState } from "react";
function useFormHandler(values) {
    const [inputs, setInputs] = (0, useState)(values);
    const handleChange = e => {
        const { value, name } = e.target;
        setInputs(Object.assign(Object.assign({}, inputs), { [name]: value }));
    };
    return { inputs, handleChange };
}
const _default = useFormHandler;
export { _default as default };
