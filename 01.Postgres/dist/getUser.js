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
const getUsers = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.client.connect();
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const result = yield db_1.client.query(query, values);
        if (result.rows.length > 0) {
            console.log("User found!", result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log("No user found with the given email");
            return null;
        }
    }
    catch (error) {
        console.error("Error during fetching the user", error);
    }
});
getUsers("harvey@gmail.com").catch(console.error);
