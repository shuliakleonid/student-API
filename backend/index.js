import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL ||
    'mongodb+srv://user:user@cluster0.tjzu3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/api', router);


app.get('/api/student/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// app.listen(4200, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })


async function startApp(){
  try{
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('Server started on '+ PORT));
  }catch (e) {
    console.log(e)
  }
}

startApp()

