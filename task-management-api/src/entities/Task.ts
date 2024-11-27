export inteface Task {
    id: string;
    title: string;
    description?: string;
    status: "pending" | "completed";
    dueDate: Date;
    createdAt: Date;
}
