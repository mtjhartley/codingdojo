var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Must enter an email!"],
        trim: true,
        unique: true,
        validate: {
            validator: function(email){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
            },
            message: "Please enter your email in the correct format."
        }
    },

    // first_name - regex, required
    first_name: {
        type: String,
        required: [true, "First name field can not be empty"],
        trim: true,
        validate: {
            validator: function(name){
                return /^[a-zA-Z]+$/.test(name);
            },
            message: "First name can only contain alphabetical characters."
        }
    },

    // last_name - regex, required
    last_name: {
        type: String,
        required: [true, "Last name field can not be empty"],
        trim: true,
        validate: {
        validator: function(name){
            return /^[a-zA-Z]+$/.test(name);
        },
        message: "Last name can only contain alphabetical characters."
        }
    },

    // password - regex, required, min 8, max 32, match confirm
    password: {
        type: String,
        required: [true, "Password field can not be empty"],
        minlength: [8, "Password must be at least 8 characters"],
        maxlength: 32,
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }

    },

    // birthday - required, at least 16 year old
    birthday: {
        type: Date,
        required: [true, "Birthday field can not be empty"],
        trim: true,
        validate: {
            validator: function( birthday ) {
                // console.log(birthday.getTime())
                // console.log(Date.now())
                return ((Date.now() - (24*3600*1000*365*16))> birthday.getTime()); //x*16 determines the year.
            },
            message: "You must be at least 16 years of age to register!"
        }
        
    },
}, {timestamps: true})

UserSchema.pre('save', function(done){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    done();
})

var User = mongoose.model('User', UserSchema);