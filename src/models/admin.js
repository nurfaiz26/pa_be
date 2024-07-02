const dbPool = require('../config/database');

// Users Table
const getAllUsers = () => {
    const SQLQuery = `  SELECT * FROM users
                        INNER JOIN user_account ON users.username = user_account.username`;

    return dbPool.execute(SQLQuery);
}

const getUserById = (id) => {
    const SQLQuery = `  SELECT * FROM users
                        INNER JOIN user_account ON users.username = user_account.username
                        WHERE userId=${id}`;

    return dbPool.execute(SQLQuery);
}

const getUserAccount = (username) => {
    const SQLQuery = `SELECT * FROM user_account WHERE username='${username}'`;

    return dbPool.execute(SQLQuery);
}

const createUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, role, username) 
                        VALUES ('${body.name}', '${body.role}', '${body.username}');`;

    return dbPool.execute(SQLQuery);
}

const createAccount = (body, hashedPassword) => {
    const SQLQuery = `  INSERT INTO user_account (username, password, email) 
                        VALUES ('${body.username}', '${hashedPassword}', '${body.email}');`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, id) => {        
    const SQLQuery = `  UPDATE users 
                        SET name='${body.name}', role='${body.role}', username='${body.username}'
                        WHERE userId=${id};`;

    console.log(`sqlquery: ${SQLQuery}`)                    

    return dbPool.execute(SQLQuery);
}

const updateAccount = (body, hashedPassword, username) => {
    let password = ""
    if(hashedPassword !== null) {
        password = `, password='${hashedPassword}'`
    }

    const SQLQuery = `  UPDATE user_account 
                        SET username='${body.username}', email='${body.email}'${password}
                        WHERE username='${username}';`;

    console.log(`sqlquery: ${SQLQuery}`)                    

    return dbPool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE userId=${id};`;

    return dbPool.execute(SQLQuery);
}

const deleteAccount = (username) => {
    const SQLQuery = `DELETE FROM user_account WHERE username='${username}';`;

    return dbPool.execute(SQLQuery);
}

// Patients Table
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


// Class-results Table
const getAllClassResults = () => {
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
                        SET date='${body.date}', patientId='${body.patientId}', ctscan='${body.ctscan}', 
                            classification='${body.classification}', label='${body.label}', 
                            doctorId='${body.doctorId}', accuracy='${body.accuracy}'
                        WHERE id=${id};`;

    return dbPool.execute(SQLQuery);
}

const deleteClassResult = (id) => {
    const SQLQuery = `DELETE FROM class_results WHERE id=${id};`;

    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllUsers,
    getUserById,
    getUserAccount,
    createUser,
    createAccount,
    updateUser,
    updateAccount,
    deleteUser,
    deleteAccount,
    getAllPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient,
    getAllClassResults,
    getClassResultById,
    createClassResult,
    updateClassResult,
    deleteClassResult
}