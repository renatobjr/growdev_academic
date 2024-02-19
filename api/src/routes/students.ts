import express from 'express';
import controller from '../controllers/students';
import isAuth from '../middlewares/isAuth';

const router = express.Router();

router.post('/create', isAuth, controller.create);
router.put('/update/:id', isAuth, controller.update);
router.delete('/delete/:id', isAuth, controller.remove);
router.get('/list', isAuth, controller.list);
router.get('/get/:id', isAuth, controller.get);

export default router;
