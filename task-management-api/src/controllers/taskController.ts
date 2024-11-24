/*
    * Here, we only delegate the jobs to services.
    * We get the request and pass its parameters or
    * body to service and send back the response.
    *
    * By keeping the controllers focused on handling
    * HTTP requests and services focused on business
    * logic, each module has a single, clear responsibility.
    * This makes each part of the code easier to
    * understand, test, and maintain.
    * */

import { Request, Response } from 'express';
import TaskService from '../services/taskService';

class TaskController {
    async createTask(req: Request, res: Response): Promise<Response> {
        try {
            const newTask = await TaskService.createTask(req.body);
            return res.status(201).json(newTask);
        } catch (error) {
            return res.status(500).json({ message: 'There is an error' });
        }
    }

    async getTasks(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await TaskService.getAllTasks();
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(500).json({ message: 'There is an error' });
        }
    }

    async getTaskById(req: Request, res: Response): Promise<Response> {
        try {
            const task = await TaskService.getTaskById(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).json({ message: 'There is an error' });
        }
    }

    async updateTask(req: Request, res: Response): Promise<Response> {
        try {
            const updatedTask = await TaskService.updateTask(req.params.id, req.body);
            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.status(200).json(updatedTask);
        } catch (error) {
            return res.status(500).json({ message: 'There is an error' });
        }
    }

    async deleteTask(req: Request, res: Response): Promise<Response> {
        try {
            const success = await TaskService.deleteTask(req.params.id);
            if (!success) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'There is an error' });
        }
    }
}

export default new TaskController();
