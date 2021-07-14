const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  // get all todo data
  Todo.find()
    .lean()
    .sort({ name: 'asc' })
    .then((todos) => res.render('index', { todos }))
    .catch((error) => console.error(error))
})

module.exports = router
