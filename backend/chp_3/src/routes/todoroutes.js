import express from "express";
import { prisma } from "../prismaClient.js";

const router = express.Router();
// Register route

router.get("/", (req, res) => {
  // Get all todos for the user
  // Assuming user ID is stored in req.user
  try {
    const todos = db
      .prepare(`SELECT * FROM todos WHERE user_id = ?`)
      .all(req.userId);
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(503).send("Error fetching todos");
  }
});

//cretae a new todo

router.post("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).send("Title and description are required");
  }

  try {
    const result = db
      .prepare(`INSERT INTO todos (task, user_id) VALUES ( ?, ?)`)
      .run(task, req.userId);
    res.json({ id: result.lastInsertRowid, task });
  } catch (err) {
    console.error(err);
    res.status(503).send("Error creating todo");
  }
});

//update a todo

router.put("/:id", (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  const { page } = req.query;

  const updatedTodo = db.prepare("UPDATE todos SET completed = ? WHERE id = ?");
  updatedTodo.run(completed, id);

  res.json({ message: "Todo completed" });
});

//delete a todo

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const deleteTodo = db.prepare(
      "DELETE FROM todos WHERE id = ? AND user_id = ?"
    );
    deleteTodo.run(id, userId);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    console.error(err);
    res.status(503).send("Error deleting todo");
  }
});

export default router;
