import { CreateTaskModel, UpdateTaskModel } from "../models/TaskModel";
import { Task } from "../entities/Task";
import { ITaskRepository } from "../repositories/ITaskRepository"

export class TaskService {
    private taskRepository: ITaskRepository;

    constructor(taskRepository: ITaskRepository) {
        this.taskRepository = taskRepository;
    }

    async createTask(task: CreateTaskModel): Promise<Task> {
        return this.taskRepository.create(task);
    }

    async getAllTasks(): Promise<Task[]> {
        return this.taskRepository.findAll();
    }

    async getTaskById(id: string): Promise<Task | null> {
        return this.taskRepository.findById(id);
    }

    async updateTask(id: string, updates: UpdateTaskModel): Promise<Task | null> {
        return this.taskRepository.update(id, updates);
    }

    async deleteTask(id: string): Promise<boolean> {
        return this.taskRepository.delete(id);
    }
}

