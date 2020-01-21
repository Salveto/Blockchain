let mongoose = require('mongoose')



//Set mongoose parameters
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const server = 'mongodb://localhost:27017/'
const database = 'project'


mongoose.connect(`${server}${database}`)

let landSchema = new mongoose.Schema({
    ekatha: Number,
    num_of_acres: Number,
    state: String,
    district: String,
    place: String
})

let FarmerSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone_no: Number,
    email: String,
    password: String,
    land: landSchema
})

module.exports = mongoose.model('Farmer', FarmerSchema)
