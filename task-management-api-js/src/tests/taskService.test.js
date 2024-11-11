const taskService = require("../services/taskService");

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
