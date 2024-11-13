import { Task } from '../models/task';
import { TaskModelMock } from '../mocks/taskModel.mock';

class TaskService {
    constructor() {}

    async createTask(task: Task): Promise<Task> {
        return TaskModelMock.create(task);
    }

    async getAllTasks(): Promise<Task[]> {
        return TaskModelMock.findAll();
    }

    async getTaskById(id: string): Promise<Task | null> {
        return TaskModelMock.findById(id);
    }

    async updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
        return TaskModelMock.update(id, updates);
    }

    async deleteTask(id: string): Promise<boolean> {
        return TaskModelMock.delete(id);
    }
}

export default new TaskService();
