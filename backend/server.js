const express = require('express');
const { Client } = require('pg');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client.connect();

app.get('/api/shelters', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM Shelters');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los refugios' });
  }
});

app.get('/api/animals/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query('SELECT * FROM Animals WHERE animal_id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el animal' });
  }
});

app.get('/api/animals', async (req, res) => {
  const { species, sex, status } = req.query;

  let query = 'SELECT * FROM Animals WHERE 1=1';
  let params = [];

  if (species && species !== 'all') {
    query += ' AND species = $' + (params.length + 1);
    params.push(species);
  }

  if (sex && sex !== 'all') {
    query += ' AND sex = $' + (params.length + 1);
    params.push(sex);
  }

  if (status && status !== 'all') {
    query += ' AND status = $' + (params.length + 1);
    params.push(status);
  }

  try {
    const result = await client.query(query, params);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los animales' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM Users');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

app.get('/api/city', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM City');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ciudades' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

