const mongoose = require('mongoose')

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        username:String,
        email:String,
        password:String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Role'
            }
        ],
        primaryLocation: Object,
        favoriteLocations:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Location'
            }
        ],
        searchLocations:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Location'
            }
        ]
    })
)

module.exports = User