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
const express_1 = require("express");
const employee_1 = require("../db/employee");
class userController {
    constructor() {
        this.getAllUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield employee_1.employeeModel.find({});
                return res.status(200).json({ data: users });
            }
            catch (error) {
                return express_1.response.sendStatus(400);
            }
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield employee_1.employeeModel.findById(id);
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                    console.log('not found');
                }
                return res.status(200).json({ data: user });
            }
            catch (error) {
                return express_1.response.sendStatus(400);
            }
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, mobile, dob, doj } = req.body;
                // Create a new user instance with the provided data
                const user = new employee_1.employeeModel({
                    name,
                    email,
                    mobile,
                    dob,
                    doj
                });
                // Save the new user to the database
                yield user.save();
                // Return a success response with the created user data
                return res.status(200).json({ msg: "User created", data: user });
            }
            catch (error) {
                console.error("Error creating user:", error); // Log the error for debugging purposes
                return res.status(400).json({ msg: "Failed to create user", message: error }); // Provide a more detailed error response
            }
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params; // Get the user ID from the route parameters
                const { name, email, mobile, dob, doj } = req.body;
                const user = yield employee_1.employeeModel.findById(id); // Use the ID to find the user
                if (user) {
                    user.name = name;
                    user.email = email;
                    user.mobile = mobile;
                    user.dob = dob;
                    user.doj = doj;
                    yield user.save();
                    return res.status(200).json({ msg: 'User updated', data: user }); // Update message
                }
                else {
                    return res.status(404).json({ msg: 'User not found' }); // Handle case where user is not found
                }
            }
            catch (error) {
                return res.sendStatus(400); // Handle any other errors
            }
        });
        this.deleteUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                // Correct usage: Pass the id directly, not wrapped in an object
                const user = yield employee_1.employeeModel.findByIdAndDelete(id);
                if (user) {
                    return res.status(200).json({ msg: 'User deleted' });
                }
                else {
                    return res.status(404).json({ msg: 'User not found' });
                }
            }
            catch (error) {
                console.error("Error deleting user:", error); // Log the error for debugging
                return res.status(400).json({ msg: "Failed to delete user", message: error }); // Provide a detailed error response
            }
        });
    }
}
exports.default = new userController();
//# sourceMappingURL=userController.js.map