const express = require('express');
const Task = require('../models/Tasks');
const auth = require('../authMiddleware');

const router = express.Router();

// Listar tarefas do usuário
router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

// Criar tarefa
router.post('/', auth, async (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ user: req.user, title });
  await newTask.save();
  res.status(201).json(newTask);
});

// Editar tarefa
router.put('/:id', auth, async (req, res) => {
  const { title, completed } = req.body;
  const updatedTask = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    { title, completed },
    { new: true }
  );
  if (!updatedTask) return res.status(404).json({ msg: 'Tarefa não encontrada' });
  res.json(updatedTask);
});

// Remover tarefa
router.delete('/:id', auth, async (req, res) => {
  const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, user: req.user });
  if (!deletedTask) return res.status(404).json({ msg: 'Tarefa não encontrada' });
  res.json({ msg: 'Tarefa removida' });
});

module.exports = router;
