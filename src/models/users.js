const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const getUserById = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE userId=${id}`;

    return dbPool.execute(SQLQuery);
}

const createUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, email, role, username, password) 
                        VALUES ('${body.name}', '${body.email}', '${body.role}', '${body.username}', '${body.password}');`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    let nameQuery = ""
    let roleQuery = ""
    let setQuery = ""
    
    if(body.name) {
        nameQuery = `name='${body.name}'`;
        setQuery = nameQuery
    }

    if(body.role) {
        roleQuery = `role='${body.role}'`
        setQuery = roleQuery
    }

    if(body.name && body.role) {
        setQuery = `${nameQuery}, ${roleQuery}`
    }

    console.log(`sqlquery: ${nameQuery}, ${body.name}`)
        
    const SQLQuery = `UPDATE users SET ${setQuery} WHERE userId=${id};`;

    console.log(`sqlquery: ${SQLQuery}`)                    

    return dbPool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE userId=${id};`;

    return dbPool.execute(SQLQuery);
}

const deleteAccount = (username) => {
    const SQLQuery = `DELETE FROM user_account WHERE username="${username}";`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteAccount
}