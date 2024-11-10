const Task = require("../models/taskModel");

// Temporary in-memory "database" for tasks
const tasks = [];
let currentId = "1";

// Create a new task
const createTask = ({ title, description, status = "pending", dueDate }) => {
    const newTask = new Task({
        id: `${parseInt(currentId++)}`,
        title,
        description,
        status,
        dueDate
    });

    tasks.push(newTask);
    return newTask;
};

// Get all tasks
const getAllTasks = () => {
    return tasks;
};

// Get a specific task by id
const getTaskById = (id) => {
    return tasks.find((task) => id === task.id);
};

// Update a task by id
const updateTask = (id, updates) => {
    const task = tasks.find((task) => id === task.id);

    if (!task) return null;

    task.title = updates.title || task.title;
    task.description = updates.description || task.description;
    task.status = updates.status || task.status;
    task.dueDate = updates.dueDate || task.dueDate;

    return task;
};

// Delete a task by id
const deleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => id === task.id);

    if (taskIndex === -1) return null;

    tasks.splice(taskIndex, 1);
    return true;
};


module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};


