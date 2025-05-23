const authRoutes = require('./routes/auth');


const tasksRoutes = require('./routes/tasks');




// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

// Rotas 

const PORT = process.env.PORT || 5000;
app.use('/api/auth', authRoutes);
app.use('/api/tasks', tasksRoutes);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
