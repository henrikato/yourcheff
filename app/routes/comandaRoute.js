import { Router } from 'express';
import comandaController from '../controllers/comandaController';

const router = Router();

router.route('/comanda').post(comandaController.Post).get(comandaController.Get)
router.get('/comanda/:id', comandaController.GetById)
router.put('/comanda/:id', comandaController.Put)
router.delete('/comanda/:id', comandaController.Delete)

export default router;