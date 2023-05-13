// const router = require('express').Router();

// //import todo model
// const TodoItemsModel = require('../models/todoItem')

// //create our first routes - we will add Item to our databse

// router.post('/api/item', async(req, res)=>{
//     try {
//         const newItem = new TodoItemsModel({
//             item: req.body.item,
//         })
//         // save this item into databases
//         const savItem = await newItem.save()
//         res.status(200).json('Item Added Successfully .');

//     } catch (error) {
//         res.json(err);
//     }
// })

// module.exports = router;

const router = require('express').Router();
const TodoItemsModel = require('../models/todoItem');

router.post('/api/item', async (req, res) => {
  try {
    const newItem = new TodoItemsModel({
      item: req.body.item,
    });
    // Save the item into the database
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// lets create second routes -- get data from database
router.get('/api/item',async(req,res) =>{
  try {
    const allTodoItems = await TodoItemsModel.find({});
    res.status(200).json(allTodoItems)
  } catch (error) {
    res.json(error)
  }
})

//lets update item 
router.put('/api/item/:id', async(req, res) =>{
  try {
    // find item by its id and update it
    const updateItems = await TodoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json("Item updates in list")
  } catch (error) {
    res.json(error)
  }
})

//lets delete item 
router.delete('/api/item/:id', async(req, res) =>{
  try {
    // find item by its id and update it
    const DeleteItems = await TodoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item delete in list")
  } catch (error) {
    res.json(error)
  }
})


module.exports = router;