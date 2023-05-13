// const mongoose = require('mongoose');

// //create Schema
// const TodoItemSchema = new mongoose.Schema({
//     item:{
//         type:String,
//         require:true,
//     }
   
// })

// //export this schema

// module.exports = mongoose.model('todo', TodoItemSchema)

const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);