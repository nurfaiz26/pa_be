const ClassResultModoel = require('../models/class-results');

const getAllClassResults = async (req, res) => {
    try {
        const [data] = await ClassResultModoel.getAllClassResults();

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
        const [data] = await ClassResultModoel.getClassResultById(id);

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
        await ClassResultModoel.createClassResult(body);

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

    if(!body.label){
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await ClassResultModoel.updateClassResult(body, id)
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
        await ClassResultModoel.deleteClassResult(id);

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
    getAllClassResults,
    getClassResultById,
    createNewClassResult,
    updateClassResult,
    deleteClassResult
};