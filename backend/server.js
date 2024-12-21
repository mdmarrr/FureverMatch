const express = require('express');
//const { Client } = require('pg');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: '*', // Permitir solicitudes de todos los orígenes
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));
app.use(express.json());

const apiBaseURL = 'https://furever-match-eccf751a1528.herokuapp.com/api';

/*const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:12345678@localhost:5432/FureverMatch',
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client.connect();*/

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/shelters', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseURL}/shelters`);
    //const result = await client.query('SELECT * FROM Shelters');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los refugios' });
  }
});

app.get('/api/animals/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${apiBaseURL}/animals/${id}`);
    //const result = await client.query('SELECT * FROM Animals WHERE animal_id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el animal' });
  }
});

app.get('/api/animals', async (req, res) => {
  const { species, sex, status } = req.query;

  try {
    // Se construye la URL con los parámetros de búsqueda
    let url = `${apiBaseURL}/animals?`;
    if (species && species !== 'all') url += `species=${species}&`;
    if (sex && sex !== 'all') url += `sex=${sex}&`;
    if (status && status !== 'all') url += `status=${status}&`;

    // Hacemos la solicitud HTTP a la API de Heroku
    const response = await axios.get(url);
    res.json(response.data);  // Devuelve los animales desde la API de Heroku
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los animales' });
  }
});
/*
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
*/
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseURL}/users`);
    //const result = await client.query('SELECT * FROM Users');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

app.post('/api/users', async (req, res) => {
  const { email, password, name } = req.body;

  //const checkUser = await client.query('SELECT * FROM Users WHERE email = $1', [email]);
  //if (checkUser.rows.length > 0) {
    //return res.status(400).json({ error: 'User already exists' });
  //}

  try {
    const response = await axios.post(`${apiBaseURL}/users`, {
      email, password, name
    });
    /*const result = await client.query(
      'INSERT INTO Users (email, password, name) VALUES ($1, $2, $3) RETURNING *',
      [email, password, name]
    );*/
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.get('/api/city', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseURL}/city`);
    //const result = await client.query('SELECT * FROM City');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ciudades' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Sirve el archivo index.html de Vue.js
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

/*app.listen(5000, '0.0.0.0', () => {
  console.log('Servidor corriendo en http://0.0.0.0:5000');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});*/

