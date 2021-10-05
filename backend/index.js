import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL ||
    'mongodb+srv://user:user@cluster0.tjzu3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('/api', router);


async function startApp(){
  try{
    await mongoose.connect(DB_URL,);
    app.listen(PORT, () => console.log('Server started on '+ PORT));
  }catch (e) {
    console.log(e)
  }
}

startApp()

