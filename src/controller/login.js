const LoginModel = require('../models/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUserAccount = async (req, res) => {
    const {body} = req

    console.log(body)
    
    if(!body.username || !body.password) {
        return res.status(404).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        const [data] = await LoginModel(body.username);
        const user = data[0]

        const isPasswordValid = await bcrypt.compare(body.password, user.password)

        if(isPasswordValid){
            const payload = {
                id: user.userId,
                name: user.name,
                username: user.username
            }
    
            const secret = process.env.JWT_SECRET;
    
            const expiresIn = 60 * 60 * 1;
    
            const token = jwt.sign(payload, secret, {expiresIn: expiresIn})
    
            return res.json({
                message: 'Login Success',
                data: {
                    id: user.id,
                    userId: user.userId,
                    username: user.username,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                },
                token: token
            });
        } else {
            return res.status(403).json({
                message: 'Wrong password'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error ',
            serverMessage: error
        });
    }
}

module.exports = getUserAccount;
