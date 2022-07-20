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
exports.deleteAuthor = exports.createAuthor = exports.updateAuthor = exports.getAllAuthors = exports.getAuthor = void 0;
const Author_1 = __importDefault(require("../models/Author"));
const getAuthor = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let author = yield Author_1.default.findOne({ name: req.params.name });
        if (!author) {
            resp.status(404).send('Author not found');
            return;
        }
        resp.status(200).send(author);
    }
    catch (error) {
        resp.status(422).send(error);
    }
});
exports.getAuthor = getAuthor;
const getAllAuthors = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log('getting auths');
        let authors = yield Author_1.default.find();
        if (!authors || (authors.length === 0)) {
            resp.status(404).send('Authors not found');
            return;
        }
        resp.status(200).send(authors);
    }
    catch (error) {
        resp.status(422).send(error);
    }
});
exports.getAllAuthors = getAllAuthors;
const createAuthor = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log('hello create');
        let author = yield Author_1.default.create(req.body);
        resp.status(200).send('created author - ' + author);
    }
    catch (error) {
        resp.status(422).send(error);
    }
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.params.name);
        let author = yield Author_1.default.findOneAndUpdate({ name: req.params.name }, req.body);
        resp.status(200).send('updated author - ' + author);
    }
    catch (error) {
        resp.status(422).send(error);
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let author = yield Author_1.default.findOneAndDelete({ name: req.params.name });
        resp.status(200).send('deleted author - ' + author);
    }
    catch (error) {
        resp.status(422).send(error);
    }
});
exports.deleteAuthor = deleteAuthor;
