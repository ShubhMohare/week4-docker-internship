
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'backend' });
});

app.get('/api/status', async (req, res) => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST || 'db',
      user: process.env.DB_USER || 'appuser',
      password: process.env.DB_PASSWORD || 'appsecret123',
      database: process.env.DB_NAME || 'devopsdb'
    });

    const [rows] = await db.query('SELECT NOW() AS database_time');
    await db.end();

    res.json({
      status: 'success',
      backend: 'Node.js',
      database: 'MySQL connected',
      database_time: rows[0].database_time
    });
  } catch (error) {
    console.error(error.message);
    res.status(503).json({
      status: 'error',
      message: 'Database connection failed'
    });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Backend listening on port 3000');
});
