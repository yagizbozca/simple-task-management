const taskService = require("../services/taskService");
        return new Promise((resolve, reject) => {
            const taskIndex = this.tasks.findIndex((task) => id === task.id);

            if (!taskIndex) {
                reject({ message: 'Task not found' });
            }

            this.tasks.splice(taskIndex, 1);
            resolve(true);
        });

describe("Task Service", () => {
    // Reset the in-memory database before each test
    beforeEach(() => {
        taskService.tasks = [];
        taskService.currentId = 1;
    });

    test("should create a new task", () => {
        const taskData = { title: "Test Task", description: "Test Description" };
        const newTask = taskService.createTask(taskData);

        expect(newTask).toHaveProperty("id");
        expect(newTask.title).toBe(taskData.title);
        expect(newTask.status).toBe("pending"); //default status
    });

    test("should retrieve a task by id", () => {
        const taskData = { title: "Different Test Task" };
        const createdTask = taskService.createTask(taskData);
        const foundTask = taskService.getTaskById(createdTask.id);

        expect(foundTask).toEqual(createdTask);
    });
});
