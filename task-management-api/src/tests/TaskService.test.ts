import { TaskService } from "../services/TaskService";
import { TaskRepositoryMock } from "../mocks/TaskRepository.mock";
import { TaskStatus } from "../enums/TaskStatus.enum";

describe("TaskService", () => {
    let service: TaskService;

    beforeEach(() => {
        const repository = new TaskRepositoryMock();
        service = new TaskService(repository);
    });

    test("should create a new task", async () => {
        const task = { title: "Test task", status: TaskStatus.pending, dueDate: "01-01-2025" };
        const result = await service.createTask(task);
        expect(result).toMatchObject(task);
    });

    test("should return all tasks", async () => {
        const tasks = await service.getAllTasks();
        expect(tasks).toBeInstanceOf(Array);
    });
});
