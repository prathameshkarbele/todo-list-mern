// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

// const app = express();

// app.use(express.json());

// //Port
// const PORT = process.env.PORT || 5500;

// // lets import routes
// const TodoItemRoutes = require('./routes/todoitem')

// // lets connect to mongoDb
// mongoose.connect(process.env.DB_CONNECT)
// .then(()=>console.log("Connect to the mongodb"))
// .catch(err =>console.log(err));



// app.use('/', TodoItemRoutes);



// // add Port and connect to server
// app.listen(PORT,()=>{
//    console.log("Connected to the Server")
// })

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors())


app.use(express.json());

const PORT = process.env.PORT || 4500;

const TodoItemRoutes = require('./routes/todoitem');

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/', TodoItemRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
