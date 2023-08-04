"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = require("../controllers/productsController");
const router = express_1.default.Router();
router.get("/", productsController_1.getProducts);
router.get("/search", productsController_1.searchProducts);
exports.default = router;
