let monguz = require('mongoose');
let bcrypt = require('bcrypt');

let userSchema = new monguz.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    }
});

userSchema.post('save', (doc, next) => {
    console.log('user saved in db');
    next();
})

userSchema.pre('save', async function(next) {
    console.log('user about to be saved');
    try {
        let salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        console.log(error);
    }
})
let user = monguz.model('user', userSchema);


module.exports = user;