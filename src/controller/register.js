const RegisterModel = require('../models/register');
const bcrypt = require('bcrypt');

const registerAccount = async (req, res) => {
    const {body} = req

    console.log(body)
    
    if(!body.username || !body.email || !body.password || !body.name || !body.role) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }
    
    const hashedPassword = await bcrypt.hash(body.password, 10);
    
    try {
        await RegisterModel.createAccount(body, hashedPassword);

        try {
            await RegisterModel.createUser(body);
    
            res.status(201).json({
                message: 'Account register success',
                data: req.body
            });
        } catch (error) {
            res.status(500).json({
                message: 'Server error or username was taken',
                serverMessage: error
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

module.exports = registerAccount;
