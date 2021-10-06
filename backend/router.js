import Router from 'express';
import StudentController from './student-controller.js';

const router = new Router();

router.post('/student', StudentController.create);
router.get('/student', StudentController.getAll);
router.get('/student/:id', StudentController.getOne);
router.put('/student', StudentController.update);
router.delete('/student/:id', StudentController.delete);

export default router;
