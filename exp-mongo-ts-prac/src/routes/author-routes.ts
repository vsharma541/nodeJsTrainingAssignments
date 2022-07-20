import express from 'express';
import * as AuthorController from '../controllers/author-controller';

const router = express.Router();

router.get('/author/:name', AuthorController.getAuthor);
router.get('/authors', AuthorController.getAllAuthors);
router.post('/author', AuthorController.createAuthor);
router.put('/author/:name', AuthorController.updateAuthor);
router.delete('/author/:name', AuthorController.deleteAuthor);

export default router;