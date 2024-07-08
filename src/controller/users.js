const UserModoel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModoel.getAllUsers();

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: 'Get all users success',
                data: data
            });
        } else {
            res.status(404).json({
                message: 'Data not found!',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const [data] = await UserModoel.getUserById(id);
       
        if(data[0] != null) {
            console.log(data)
            res.json({
                message: `Get users id = ${id} success`,
                data: data
            });
        } else {
            res.status(404).json({
                message: 'Data not found!',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

const createNewUser = async (req, res) => {
    console.log(req.body);
    const { body } = req;

    if(!body.email || !body.name || !body.role || !body.username || !body.password) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await UserModoel.createUser(body);

        res.status(201).json({
            message: 'Create new user success',
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    if(!body.name && !body.role) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await UserModoel.updateUser(body, id)
        res.json({
            message: 'Update user success',
            data: {
                id: id,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params;
    let data
    let username

    try {
        [data] = await UserModoel.getUserById(id);
        username = data[0].username
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
    
    try {
        await UserModoel.deleteUser(id);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

    try {
        await UserModoel.deleteAccount(username);
        res.json({
            message: 'Delete user success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
};