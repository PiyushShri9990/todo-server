import express from 'express';
import Connection from './database/db.js';

const app = express();

const PORT = 5500;

Connection();

app.listen(PORT, ()=>console.log(`Your server is running successfully on port ${PORT}`));