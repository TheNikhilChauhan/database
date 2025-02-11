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
const db_1 = require("./db");
const InsertQuery = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.client.connect();
        const insertQuery = "INSERT INTO users(username, email,password)VALUES($1, $2, $3)";
        const values = [username, email, password];
        const res = yield db_1.client.query(insertQuery, values);
        console.log("Insertion successful", res);
    }
    catch (error) {
        console.error("Error during the insertion", error);
    }
});
InsertQuery("Harvey", "harvey@gmail.com", "harvey12345").catch(console.error);
