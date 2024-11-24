import { Router, Request, Response } from 'express';
import TaskController from '../controllers/taskController';

const router = Router();

router.post('/', (req: Request, res: Response) => TaskController.createTask(req, res));

router.get('/', (req: Request, res: Response) => TaskController.getTasks(req, res));

router.get('/:id', TaskController.getTaskById.bind);

router.put('/:id', TaskController.updateTask.bind);

router.delete('/:id', TaskController.deleteTask.bind);

export default router;
