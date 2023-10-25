// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import aboutController from './about.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/about'
router.get('/', aboutController.about);

// GET '/user/logout'
// router.get('/logout', userController.logout);

// GET '/user/register'
// router.get('/register', userController.register);

// Exporto este tramo de ruta
export default router;
