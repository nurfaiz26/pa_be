const AdminModel = require('../models/admin');
const bcrypt = require('bcrypt');

// Users Table
const getAllUsers = async (req, res) => {
    try {
        const [data] = await AdminModel.getAllUsers();

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: 'Get all Users success',
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
        const [data] = await AdminModel.getUserById(id);

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: `Get User id = ${id} success`,
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

    if (!body.email || !body.name || !body.role || !body.username || !body.password) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    try {
        await AdminModel.createUser(body);

        try {
            await AdminModel.createAccount(body, hashedPassword);

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
    let username
    let accountId
    let hashedPassword = null

    if (!body.email || !body.name || !body.role || !body.username ) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    if(body.password) {
        hashedPassword = await bcrypt.hash(body.password, 10);
    }

    
    try {
        const [data] = await AdminModel.getUserById(id);
        username = data[0].username
        try {
            const [data] = await AdminModel.getUserAccount(username);
            accountId = data[0].userId
        } catch (error) {
            res.status(500).json({
                message: 'Server Error',
                serverMessage: error
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

    try {
        await AdminModel.updateUser(body, id)
        console.log(`userId: ${accountId}`)
        try {
            await AdminModel.updateAccount(body, hashedPassword, username)
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
        [data] = await AdminModel.getUserById(id);
        username = data[0].username
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

    try {
        await AdminModel.deleteUser(id);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

    try {
        await AdminModel.deleteAccount(username);
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

// Patients Table
const getAllPatients = async (req, res) => {
    try {
        const [data] = await AdminModel.getAllPatients();

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: 'Get all Patients success',
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

const getPatientById = async (req, res) => {
    const { id } = req.params;

    try {
        const [data] = await AdminModel.getPatientById(id);

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: `Get Patients id = ${id} success`,
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

const createNewPatient = async (req, res) => {
    console.log(req.body);
    const { body } = req;

    if(!body.patientName) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await AdminModel.createPatient(body);

        res.status(201).json({
            message: 'Create new Patient success',
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

}

const updatePatient = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    if(!body.patientName) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await AdminModel.updatePatient(body, id)
        res.json({
            message: 'Update Patient success',
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


const deletePatient = async (req, res) => {
    const { id } = req.params;
    
    try {
        await AdminModel.deletePatient(id);

        res.json({
            message: 'Delete Patient success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

}

// Class-Results Table
const getAllClassResults = async (req, res) => {
    console.log("haloo")
    try {
        const [data] = await AdminModel.getAllClassResults();

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: 'Get all Class Results success',
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

const getClassResultById = async (req, res) => {
    const { id } = req.params;

    try {
        const [data] = await AdminModel.getClassResultById(id);

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: `Get Class Results id = ${id} success`,
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

const createNewClassResult = async (req, res) => {
    console.log(req.body);
    const { body } = req;

    if(!body.date || !body.patientId || !body.ctscan || !body.classification || !body.label || !body.doctorId || !body.accuracy) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await AdminModel.createClassResult(body);

        res.status(201).json({
            message: 'Create new Class Result success',
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

}

const updateClassResult = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    
    if(!body.date || !body.patientId || !body.ctscan || !body.classification || !body.label || !body.doctorId || !body.accuracy) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    
    try {
        await AdminModel.updateClassResult(body, id)
        console.log("halooo")
        res.json({
            message: 'Update Class Result success',
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


const deleteClassResult = async (req, res) => {
    const { id } = req.params;
    
    try {
        await AdminModel.deleteClassResult(id);

        res.json({
            message: 'Delete Class Result success',
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
    deleteUser,
    getAllPatients,
    getPatientById,
    createNewPatient,
    updatePatient,
    deletePatient,
    getAllClassResults,
    getClassResultById,
    createNewClassResult,
    updateClassResult,
    deleteClassResult
};