const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'FureverMatch',
  password: '12345678',
  port: 5432,
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

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
