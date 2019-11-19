import { Router } from 'express';
import produtoController from '../controllers/produtoController';

const router = Router();

router.route('/produto').post(produtoController.Post).get(produtoController.Get)
router.get('/produto/:id', produtoController.GetById)
router.put('/produto/:id', produtoController.Put)
router.delete('/produto/:id', produtoController.Delete)

export default router;