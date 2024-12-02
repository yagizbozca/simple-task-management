export interface CreateTaskModel {
    title: string;
    description?: string;
    status: "pending" | "completed";
    dueDate: string;
}

export interface UpdateTaskModel {
    id: string;
    title?: string;
    description?: string;
    status?: "pending" | "completed";
    dueDate?: string;
}
