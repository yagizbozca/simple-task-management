import { Task } from './task';

export interface ITaskModel {
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task | null>;
    create(task: Task): Promise<Task>;
    update(id: string, task: Partial<Task>): Promise<Task | null>;
    delete(id: string): Promise<boolean>;
}
