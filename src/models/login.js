const dbPool = require('../config/database');

const getAccount = (username) => {
    const SQLQuery = `  SELECT *
                        FROM user_account 
                        INNER JOIN users ON user_account.username = users.username
                        WHERE user_account.username = '${username}';`;

    return dbPool.execute(SQLQuery);
}

module.exports = getAccount;