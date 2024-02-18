import express from 'express';
import controller from '../controllers/students';

const router = express.Router();

router.post('/create', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.remove);
router.get('/list', controller.list);
router.get('/get/:id', controller.get);

export default router;
