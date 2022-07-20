import {Request, Response, NextFunction} from 'express';
import AuthorModel, {Author} from '../models/Author';
type AuthorType = Author | null;

const getAuthor = async (req: Request, resp: Response, next: NextFunction) => {
    try {
        let author: AuthorType = await AuthorModel.findOne({name: req.params.name});
        if(!author) {
            resp.status(404).send('Author not found');
            return;
        }
        resp.status(200).send(author);
    } catch (error) {
        resp.status(422).send(error);
    }
}

const getAllAuthors = async (req: Request, resp: Response, next: NextFunction) => {
    try {
        // console.log('getting auths');
        
        let authors: AuthorType[] = await AuthorModel.find();
        if(!authors || (authors.length === 0)) {
            resp.status(404).send('Authors not found');
            return;
        }
        resp.status(200).send(authors);
    } catch (error) {
        resp.status(422).send(error);
    }
}

const createAuthor = async (req: Request, resp: Response, next: NextFunction) => {
    try {
        // console.log('hello create');
        
        let author: AuthorType = await AuthorModel.create(req.body);
        resp.status(200).send('created author - ' + author);
    } catch (error) {
        resp.status(422).send(error);
    }
}

const updateAuthor = async (req: Request, resp: Response, next: NextFunction) => {
    try {
        // console.log(req.params.name);
        
        let author: AuthorType = await AuthorModel.findOneAndUpdate({name: req.params.name}, req.body);
        resp.status(200).send('updated author - ' + author);
    } catch (error) {
        resp.status(422).send(error);
    }
}

const deleteAuthor = async (req: Request, resp: Response, next: NextFunction) => {
    try {
        let author: AuthorType = await AuthorModel.findOneAndDelete({name: req.params.name});
        resp.status(200).send('deleted author - ' + author);
    } catch (error) {
        resp.status(422).send(error);
    }
}

export {getAuthor, getAllAuthors, updateAuthor, createAuthor, deleteAuthor};