import { ITaskModel } from '../models/ITaskModel';
import { Task } from '../models/task';
import { v4 as uuidv4 } from 'uuid';

class TaskModelMock implements ITaskModel {
    private tasks: Task[] = [
        { id: uuidv4(), title: 'Learn OOP', status: 'pending', dueDate: '01-01-2025' },
        { id: uuidv4(), title: 'Get bread', status: 'completed', dueDate: '12-11-2024' }
    ];

    private mockDBConnection(fail = false): Promise<Task[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (fail) {
                    reject({ message: 'DB error' });
                }
                resolve(this.tasks);
            }, 1500);
        });
    }

    async findAll(): Promise<Task[]> {
        return this.mockDBConnection().then((tasks: Task[]) => {
            return tasks;
        });
    }

    async findById(id: string): Promise<Task | null> {
        return this.mockDBConnection().then((tasks: Task[]) => {
            return tasks.find(task => task.id === id) || null;
        });
    }

    async create(taskData: Omit<Task, 'id'>): Promise<Task> {
        return this.mockDBConnection().then((tasks: Task[]) => {
            const task: Task = { id: uuidv4(), ... taskData};
            tasks.push(task);
            return task;
        });
    }

    async update(id: string, updates: Partial<Task>): Promise<Task | null> {
        return this.mockDBConnection().then((tasks: Task[]) => {
            const taskIndex = tasks.findIndex(task => task.id === id);
            if (taskIndex === -1) return null;

            tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
            return tasks[taskIndex];
        });
    }

    async delete(id: string): Promise<boolean> {
        return this.mockDBConnection().then((tasks: Task[]) => {
            const initialLength = tasks.length;
            tasks = tasks.filter(task => task.id !== id);
            this.tasks = tasks;
            return tasks.length < initialLength;
        });
    }
}

export default new TaskModelMock();
