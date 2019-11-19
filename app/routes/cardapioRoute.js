import { Router } from 'express';
import cardapioController from '../controllers/cardapioController';

const router = Router();

router.route('/cardapio').post(cardapioController.Post).get(cardapioController.Get)
router.get('/cardapio/:id', cardapioController.GetById)
router.put('/cardapio/:id', cardapioController.Put)
router.delete('/cardapio/:id', cardapioController.Delete)

export default router;