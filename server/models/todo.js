var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt : {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Go to play cricket',
    completed: true,
    completedAt: 9
});

module.exports = {
    Todo
};