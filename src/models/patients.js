const dbPool = require('../config/database');

const getAllPatients = () => {
    const SQLQuery = 'SELECT * FROM patients';

    return dbPool.execute(SQLQuery);
}

const getPatientById = (id) => {
    const SQLQuery = `SELECT * FROM patients WHERE patientId=${id}`;

    return dbPool.execute(SQLQuery);
}

const createPatient = (body) => {
    const SQLQuery = `INSERT INTO patients (patientName) VALUES ('${body.patientName}');`;

    return dbPool.execute(SQLQuery);
}

const updatePatient = (body, id) => {
    const SQLQuery = `UPDATE patients SET patientName='${body.patientName}' WHERE patientId=${id};`;

    return dbPool.execute(SQLQuery);
}

const deletePatient = (id) => {
    const SQLQuery = `DELETE FROM patients WHERE patientId=${id};`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
}