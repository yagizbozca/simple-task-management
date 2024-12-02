import { CreateTaskModel, UpdateTaskModel } from "..models/TaskModel";
import { Task } from "../entities/Task";

export interface ITaskModel {
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task | null>;
    create(task: CreateTaskModel): Promise<Task>;
    update(id: string, task: UpdateTaskModel): Promise<Task | null>;
    delete(id: string): Promise<boolean>;
}
