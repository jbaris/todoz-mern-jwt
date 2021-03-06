const ErrorHandler = require('../helpers/error')
const TodoItem = require('../models/TodoItem')

exports.create = async (req, res, next) => {
  try {
    // Creates a TodoItem
    const todoItem = new TodoItem(req.body)
    // Sets the owner
    todoItem.owner = req.user.id
    // Save the TodoItem
    todoItem.save()
    // Removes the owner
    const todoItemObj = todoItem.toObject()
    delete todoItemObj.owner
    res.json(todoItemObj)
  } catch (error) {
    next(error)
  }
}

exports.getAll = async (req, res, next) => {
  try {
    // Retrieves all the TodoItem for the current user
    const todoItems = await TodoItem.find({ owner: req.user.id }).sort({ timestamp: -1 }).select('-owner')
    res.json(todoItems)
  } catch (error) {
    next(error)
  }
}

exports.delete = async (req, res, next) => {
  try {
    // Deletes the TodoItem if belongs to the logged user
    let deleted = null
    await TodoItem.findOneAndRemove({
      _id: req.params.id,
      owner: req.user.id
    }, (err, doc) => {
      if (err) {
        throw err
      } else {
        deleted = doc
      }
    })
    if (deleted) {
      const deletedObj = deleted.toObject()
      deletedObj.id = deletedObj._id
      delete deletedObj.owner
      delete deletedObj._id
      delete deletedObj.__v
      res.json(deletedObj)
    } else {
      throw new ErrorHandler(404, 'Not found')
    }
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    // Updates the TodoItem if belongs to the logged user
    let updated = null
    await TodoItem.findOneAndUpdate({
      _id: req.body.id,
      owner: req.user.id
    }, { $set: req.body }, (err, doc) => {
      if (err) {
        throw err
      } else {
        updated = doc
      }
    })
    if (updated) {
      res.json(updated)
    } else {
      throw new ErrorHandler(404, 'Not found')
    }
  } catch (error) {
    next(error)
  }
}
