let express = require('express')
let bodyParser = require('body-parser')

let app = express()
farmerRoute = require('./routes/Farmer/farmer')

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
app.use(bodyParser.json())


app.use(express.static('public'))
app.use(farmerRoute)
app.listen(3000, () => {
    console.log("Server is running on port 3000\nLink: http://localhost:3000/")
})