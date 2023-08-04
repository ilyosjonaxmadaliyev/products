"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    }
});
const productsModel = (0, mongoose_1.model)("products", productsSchema);
exports.default = productsModel;
