var mongoose = require('mongoose');
var users = mongoose.model('users', {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 1,
        required: true
    }
});

var newUser = new users({
    email: 'vino@example.com',
    password: 'test123'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(`Saved to user: ${doc}`));
},(err) => {
    console.log('Unable to save to user: ', err)
});

module.exports = {
    users
};