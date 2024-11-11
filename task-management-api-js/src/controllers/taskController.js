/*
    * Here, we only delegate the jobs to services.
    * We get the request and pass its parameters or
    * body to service and send back the response.
    *
    * By keeping the controllers focused on handling
    * HTTP requests and services focused on business
    * logic, each module has a single, clear responsibility.
    * This makes each part of the code easier to
    * understand, test, and maintain.
    * */

const taskService = require("../services/taskService");

// Create a new task
const createTask = (req, res) => {
    const newTask = taskService.createTask(req.body);
    res.status(201).json(newTask);
};

// Get all tasks
const getTasks = (req, res) => {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
};

// Get a specific task by id
const getTaskById = (req, res) => {
    const task = taskService.getTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({message: "Task not found"});
    }

    res.json(task);
};

// Update a task by id
const updateTask = (req, res) => {
    const updatedTask = taskService.updateTask(req.params.id, req.body);

    if (!updatedTask) {
        return res.status(404).json({message: "Task not found"});
    }

    res.json(updatedTask);
};

// Delete a task by id
const deleteTask = (req, res) => {
    const success = taskService.deleteTask(req.params.id);

    if (!success) {
        return res.status(404).json({message: "Task not found"});
    }

    res.status(204).send();
};


module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};


