import express from "express";
import db from "../db.js";
import prisma from "../prismaclient.js";

const router = express.Router();
// Register route

router.get("/", async (req, res) => {
  // Get all todos for the user
  // Assuming user ID is stored in req.user
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: req.userId,
      },
    });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(503).send("Error fetching todos");
  }
});

//cretae a new todo

router.post("/", async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).send("Title and description are required");
  }

  try {
    const todo = await prisma.todo.create({
      data: { task, userId: req.userId },
    });
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(503).send("Error creating todo");
  }
});

//update a todo

router.put("/:id", async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  const { page } = req.query;

  const updatedTodo = await prisma.todo.update({
    where: { id: parseInt(id) },
    userId: req.userId,
    data: { completed: !!completed },
  });

  res.json(updatedTodo);
});

//delete a todo

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const deleteTodo = await prisma.todo.delete({
      where: {
        id: parseInt(id),
        userId: userId,
      },
    });
    res.send({ message: "Todo deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(503).send("Error deleting todo");
  }
});

export default router;
