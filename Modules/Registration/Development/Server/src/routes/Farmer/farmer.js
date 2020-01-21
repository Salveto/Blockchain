let Farmer = require('../../models/farmer.model')  // Import farmer model
let express = require('express')
let router = express.Router()

//Validators for email, password, phone number, name and id
var email_validator = require('email-validator')                
var passwordValidator = require('password-validator')
var phoneValidator = require('validate-phone-number-node-js')
var validator = require('validator')


// Password validator
var pass_val = new passwordValidator();
// Properties of password validator
pass_val
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().not().spaces() 






//Handle GET and POST HTTP requests

router.get('/farmer',(req, res, next) => {
    console.log("This is working!! /farmer")
})

router.post('/farmer/login', (req, res, next) => {
    if(email_validator.validate(req.body.email)) {
        Farmer.findOne({
            email: req.body.email
        }).then(doc => {
            if(doc === null) {
                res.status(500).send('{"response": "unsuccessful"}')
            }else {
                let dos = JSON.stringify(doc)
                dos = JSON.parse(dos)
                if(dos['password'] == req.body.password) {
                    dos["response"] = "successful"
                    delete dos.password
                    delete dos.__v
                
                res.send(dos)
                }else {
                    res.send('{"response": "unsuccessful"}')
                }
                
                
            }
        })
        .catch(err => {
            res.status(500).send('{"response": "unsuccessful" }')
        })
    }
})


//Sign Up request
router.post('/farmer/signup', (req, res, next) => {


    //Validate all the fields in the request
    if(!validator.isEmpty(req.body.name) && 
       phoneValidator.validate(req.body.phone_no) && 
       email_validator.validate(req.body.email) &&
       pass_val.validate(req.body.password) && 
       !validator.isEmpty(req.body.id)) 
    {
        var id = req.body.id
        var name = req.body.name
        var phone_no = req.body.phone_no
        var email = req.body.email
        var password = req.body.password

        let model = new Farmer({
            id: id,
            name: name,
            phone_no: phone_no,
            email: email,
            password: password
        })

        //Save the details
        model.save().then(doc => {
            if(!doc || doc.length ==0 ) {
                res.send('{ "response": "unsuccessful" }')
            }
        }).catch(err => {
            console.log("Exception caught at farmer.js")
        })
        res.send('{ "response": "successful" }')
    
    }else {
        res.send('{ "response": "unsuccessful" }')
    }

})


//Land registration request
router.post('/farmer/registerland', (req, res, next) => {
    
    //declaration of variables
    let ekatha = req.body.ekatha
    let num_of_acres = req.body.num_of_acres
    let state = req.body.state
    let district = req.body.district
    let place = req.body.place
    let email = req.body.email

    //Validate and Save
    if(email_validator.validate(email) &&
       !isNaN(ekatha) && !isNaN(num_of_acres) &&
       !validator.isEmpty(state) &&
       !validator.isEmpty(district) &&
       !validator.isEmpty(place)
       ) {
        Farmer.findOneAndUpdate({           //Find farmer details by email and update
            email: req.body.email
            }, {
               land: {
                   ekatha: ekatha,
                   num_of_acres: num_of_acres,
                   state: state,
                   district: district,
                   place: place
            }
        }).then(doc => {
            if(doc === null) {
                res.status(500).send('{"response":"unsuccessful"}')
            }
            res.send('{"response":"successful"}')
        }).catch(err => {
            console.log("Exception caught at farmer.js file")
        })
        
    }else {
            res.send('{"response":"unsuccessful"}')
    }
})


module.exports = router;