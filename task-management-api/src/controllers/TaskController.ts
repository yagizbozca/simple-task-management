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

import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { TaskRepository } from "../repositories/TaskRepository";
import { TaskRepositoryMock } from "../mocks/TaskRepository.mock";

export class TaskController {
    // Repositories: TaskRepository, TaskRepositoryMock
    private taskRepository = new TaskRepository();
    private taskService = new TaskService(this.taskRepository);


    async createTask(req: Request, res: Response): Promise<Response> {
        try {
            const newTask = await this.taskService.createTask(req.body);
            return res.status(201).json(newTask);
        } catch (error) {
            return res.status(500).json({ message: 'There is an error', error: error });
        }
    }

    async getTasks(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await this.taskService.getAllTasks();
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(500).json({ message: 'There is an error' });
        }
    }

    async getTaskById(req: Request, res: Response): Promise<Response> {
        try {
            const task = await this.taskService.getTaskById(req.params.id);
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
            const updatedTask = await this.taskService.updateTask(req.params.id, req.body);
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
            const success = await this.taskService.deleteTask(req.params.id);
            if (!success) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'There is an error' });
        }
    }
}

