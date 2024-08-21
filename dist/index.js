"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const MONGO_URL = "mongodb://localhost:27017";
mongoose_1.default.connect(MONGO_URL, {
    dbName: "TypeScript-CRUD-App",
})
    .then(() => {
    console.log("DB CONNECTED");
})
    .catch((error) => console.log(error));
app.use('/', routes_1.default);
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000/`);
});
//# sourceMappingURL=index.js.map