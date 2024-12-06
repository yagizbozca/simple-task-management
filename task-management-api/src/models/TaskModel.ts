import { TaskStatus } from "../enums/TaskStatus.enum.ts";

export interface CreateTaskModel {
    title: string;
    description?: string;
    status: TaskStatus;
    dueDate: string;
}

export interface UpdateTaskModel {
    id: string;
    title?: string;
    description?: string;
    status?: TaskStatus;
    dueDate?: string;
}
