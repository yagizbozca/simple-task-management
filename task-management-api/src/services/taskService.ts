import TaskModel from '../models/taskModel';

class TaskService {
    private tasks: any = [];
    private currentId = 1;

    async createTask({ title: string, description = '', status = 'pending', dueDate: string }): Promise<any> {
        return new Promise((resolve, reject) => {
            const newTask = {
                id: `${currentId++}`,
                title,
                description,
                status,
                dueDate
            };

            this.tasks.push(newTask);
            resolve(newTask);
        });
    }

    async getAllTasks(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.tasks);
        });
    }

    async getTaskById(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const task = this.tasks.find((task) => task.id === id);
            resolve(task);
        });
    }

    async updateTask(id: string, updates: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const task = this.tasks.find((task) => task.id === id);

            if (!task) {
                reject({ message: 'Task not found' });
            }

            task.title = updates.title || task.title;
            task.description = updates.description || task.description;
            task.status = updates.status || task.status;
            task.dueDate = updates.dueDate || task.dueDate;

            resolve(task);
        });
    }

    async deleteTask(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const taskIndex = this.tasks.findIndex((task) => id === task.id);

            if (!taskIndex) {
                reject({ message: 'Task not found' });
            }

            this.tasks.splice(taskIndex, 1);
            resolve(true);
        });
    }
}

export default new TaskService();
