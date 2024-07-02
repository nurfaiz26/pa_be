const dbPool = require('../config/database');

const getAllClassResults = () => {
    // const SQLQuery = 'SELECT * FROM class_results';
    const SQLQuery = `  SELECT * FROM class_results 
                        INNER JOIN patients ON class_results.patientId = patients.patientId 
                        INNER JOIN users ON class_results.doctorId = users.userId`;

    return dbPool.execute(SQLQuery);
}

const getClassResultById = (id) => {
    const SQLQuery = `  SELECT * FROM class_results
                        INNER JOIN patients ON class_results.patientId = patients.patientId 
                        INNER JOIN users ON class_results.doctorId = users.userId
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const createClassResult = (body) => {
    const SQLQuery = `  INSERT INTO class_results (date, patientId, ctscan, classification, label, doctorId, accuracy) 
                        VALUES ('${body.date}', '${body.patientId}', '${body.ctscan}', '${body.classification}', '${body.label}', '${body.doctorId}', '${body.accuracy}');`;

    return dbPool.execute(SQLQuery);
}

const updateClassResult = (body, id) => {
    const SQLQuery = `  UPDATE class_results 
                        SET label='${body.label}'
                        WHERE id=${id};`;

    return dbPool.execute(SQLQuery);
}

const deleteClassResult = (id) => {
    const SQLQuery = `DELETE FROM class_results WHERE id=${id};`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllClassResults,
    getClassResultById,
    createClassResult,
    updateClassResult,
    deleteClassResult
}