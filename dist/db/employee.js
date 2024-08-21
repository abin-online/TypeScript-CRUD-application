"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const employeeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    dob: {
        type: String,
    },
    doj: {
        type: String,
    },
}, {
    timestamps: true
});
exports.employeeModel = mongoose_1.default.model('Employee', employeeSchema);
//# sourceMappingURL=employee.js.map