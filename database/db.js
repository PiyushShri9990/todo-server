import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () =>{

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.tm62j.mongodb.net/`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('error while connecting with the database', error.message);
    })

}

export default Connection;
