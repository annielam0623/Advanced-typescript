"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function useFetch() {
    const baseUrl = 'https://art-gallery-marketplace.vercel.app';
    return {
        get: (endpoint) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(baseUrl + endpoint);
                return yield res.json();
            }
            catch (err) {
                return err;
            }
        }),
        post: (endpoint, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(baseUrl + endpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                });
                return yield res.json();
            }
            catch (err) {
                return err;
            }
        }),
        put: (endpoint, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(baseUrl + endpoint, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                });
                return yield res.json();
            }
            catch (err) {
                return err;
            }
        }),
        remove: (endpoint) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(baseUrl + endpoint, {
                    method: 'DELETE'
                });
                return yield res.json();
            }
            catch (err) {
                return err;
            }
        })
    };
}
const _default = useFetch;
export { _default as default };
