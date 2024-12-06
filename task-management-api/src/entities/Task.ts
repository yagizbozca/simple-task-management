import { TaskStatus } from "../enums/TaskStatus.enum";

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    dueDate: string;
    createdAt: Date;
}
