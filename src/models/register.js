const dbPool = require('../config/database');

const createAccount = (body, hashedPassword) => {
    const SQLQuery = `  INSERT INTO user_account (username, password, email) 
                        VALUES ('${body.username}', '${hashedPassword}', '${body.email}');`;

    return dbPool.execute(SQLQuery);
}

const createUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, role, username) 
                        VALUES ('${body.name}', '${body.role}', '${body.username}');`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    createAccount,
    createUser,
};