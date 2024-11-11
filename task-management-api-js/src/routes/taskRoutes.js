const express = require("express");
const router = express.Router();

// Controllers
const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

// Route to create a new task
router.post("/", createTask);

// Route to get all tasks
router.get("/", getTasks);

// Route to get a single task by id
router.get("/:id", getTaskById);

// Route to update a task by id
router.put("/:id", updateTask);

// Route to delete a task by id
router.delete("/:id", deleteTask);

module.exports = router;
