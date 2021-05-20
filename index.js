import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'


import postRoutes from './routes/posts.js' 

const app = express()
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('hello api');
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    connectTimeoutMS: 3000
})
    .then(() => app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)

app.listen(PORT)