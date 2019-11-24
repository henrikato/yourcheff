import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';
import { Autorizacao } from '../services/authService';

const router = Router();


router.post('/login', usuarioController.Login);
router.post('/valida', usuarioController.Valida);

router.route('/usuario').post(usuarioController.Post)
router.get('/usuario', Autorizacao, usuarioController.Get)
router.get('/usuario/:id', Autorizacao, usuarioController.GetById)
router.put('/usuario/:id', Autorizacao, usuarioController.Put)
router.delete('/usuario/:id', Autorizacao, usuarioController.Delete)

export default router;