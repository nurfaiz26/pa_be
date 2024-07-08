const PatientModoel = require('../models/patients');

const getAllPatients = async (req, res) => {
    try {
        const [data] = await PatientModoel.getAllPatients();

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
        const [data] = await PatientModoel.getPatientById(id);

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
        await PatientModoel.createPatient(body);

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
        await PatientModoel.updatePatient(body, id)
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
        await PatientModoel.deletePatient(id);

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

module.exports = {
    getAllPatients,
    getPatientById,
    createNewPatient,
    updatePatient,
    deletePatient
};