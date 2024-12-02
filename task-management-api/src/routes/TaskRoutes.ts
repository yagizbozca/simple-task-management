import { Router, Request, Response } from 'express';
import { TaskController } from '../controllers/TaskController';

const taskController = new TaskController();

const router = Router();

router.post('/', (req: Request, res: Response) => taskController.createTask(req, res));

router.get('/', (req: Request, res: Response) => taskController.getTasks(req, res));

router.get('/:id', (req: Request, res: Response) => taskController.getTaskById(req, res));

router.put('/:id', (req: Request, res: Response) => taskController.updateTask(req, res));

router.delete('/:id', (req: Request, res: Response) => taskController.deleteTask(req, res));

export default router;
