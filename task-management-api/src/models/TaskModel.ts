export interface CreateTaskModel {
    title: string;
    description?: string;
    status: "pending" | "completed";
    dueDate: Date;
}

export interface UpdateTaskModel {
    id: string;
    title?: string;
    description?: string;
    status?: "pending" | "completed";
    dueDate?: Date;
}
