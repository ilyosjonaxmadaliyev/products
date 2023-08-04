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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const productsRouter_1 = __importDefault(require("./routes/productsRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/products", productsRouter_1.default);
// const fetchData = async () =>
// {
//     try
//     {
//         const res = await fetch( "https://dummyjson.com/products" );
//         const data = await res.json();
//         productsModel.create( data.products )
//     } catch ( error )
//     {
//         console.log( error );
//     }
// };
// fetchData();
const PORT = process.env.PORT || 5050;
function connecting() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    });
}
connecting();
