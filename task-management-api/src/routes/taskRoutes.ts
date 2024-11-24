import { Router, Request, Response } from 'express';
import TaskController from '../controllers/taskController';

const router = Router();

router.post('/', (req: Request, res: Response) => TaskController.createTask(req, res));

router.get('/', (req: Request, res: Response) => TaskController.getTasks(req, res));

router.get('/:id', (req: Request, res: Response) => TaskController.getTaskById(req, res));

router.put('/:id', (req: Request, res: Response) => TaskController.updateTask(req, res));

router.delete('/:id', (req: Request, res: Response) => TaskController.deleteTask(req, res));

export default router;
