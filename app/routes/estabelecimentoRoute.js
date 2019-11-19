import { Router } from 'express';
import estabelecimentoController from '../controllers/estabelecimentoController';

const router = Router();

router.route('/estabelecimento').post(estabelecimentoController.Post).get(estabelecimentoController.Get)
router.get('/estabelecimento/:id', estabelecimentoController.GetById)
router.put('/estabelecimento/:id', estabelecimentoController.Put)
router.delete('/estabelecimento/:id', estabelecimentoController.Delete)

export default router;