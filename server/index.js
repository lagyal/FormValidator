const express = require('express');
const { body, validationResult} = require('express-validator');


const app = express();

app.use(express.json());

app.post('/register',(req,res) => {
    const {name, email, password, dob} = req.body;
    
    if (!name || !email || !password || !dob) {
        return res.status(400).json({ error: 'Please fill in all the fields.' });
      }
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors : errors.array() });
        }

        //sucess registration
        return res.status(200).json({message : 'Registration successful' });
    }
);

app.listen(5000, ()=> {
    console.log('Server running on port 5000')
});