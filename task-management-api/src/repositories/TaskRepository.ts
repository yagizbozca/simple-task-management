import { query } from "../utils/database";
import { Task } from "../entities/Task";

export class TaskRepository {
    async findAll(): Promise<Task[]> {
        const result = await query<Task[]>("SELECT * FROM tasks;");
        return result;
    }

    async findById(id: number): Promise<Task | null> {
        const result = await query<Task[]>("SELECT * FROM tasks WHERE id = $1;", [id]);
        return result[0] || null;
    }

    async create(task: Partial<Omit<Task, "id" | "createdAt">>): Promise<Task> {
        const requiredFields = ["title", "status", "dueDate"];
        const optionalFields = ["description"];

        const fields: string[] = [...requiredFields];
        const placeholders: string[] = [];
        const values: any[] = [];

        let counter = 1;

        for (const field of requiredFields) {
            if (!task[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
            placeholders.push(`$${counter++}`);
            values.push(task[field]);
        }

        for (const field of optionalFields) {
            if (task[field] !== undefined) {
                fields.push(field);
                placeholders.push(`$${counter++}`);
                values.push(task[field]);
            }
        }

        const queryText = `
            INSERT INTO tasks (${fields.join(", ")})
            VALUES (${placeholders.join(", ")})
            RETURNING *;
        `;

        const result = await query<Task[]>(queryText, values);
        return result[0];
    }

    async update(id: number, task: Partial<Omit<Task, "id" | "createdAt">>): Promise<Task | null> {
        const fields: string[] = [];
        const values: any[] = [];
        let counter = 1;

        for (const [key, value] of Object.entries(task)) {
            fields.push(`${key} = $${counter++}`);
            values.push(value);
        }

        if (fields.length === 0) {
            throw Error("No fields to update");
        }

        values.push(id);

        const result = await query(
            `UPDATE tasks SET ${fields.join(", ")} WHERE id = $${counter} RETURNING *;`,
            values
        );

        return result[0] || null;
    }

    async delete(id: number): Promise<boolean> {
        const result = await query<number>("DELETE FROM tasks WHERE id = $1 RETURNING id", [id]);
        return result.length > 0;
    }
}
