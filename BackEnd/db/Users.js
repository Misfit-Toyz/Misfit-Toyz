const {client} = require("./client")


async function createUser ({username, password}) {
    try{
        const{ rows:[user] } = await client.query(
            `
            INSERT INTO users(username,password)
            VALUES ($1,$2)
            ON CONFLICT (username) DO NOTHING 
            RETURNING *;
            `,[username, password]
        );
        return user;
    } catch(error){
        console.log(error)
        throw error
    }
}

async function getUser ({username, password}) {
    try {
        const {rows:[user]} = await client.query(
            `
            SELECT *
            FROM users
            WHERE username = $1 AND password = $2
            `,[username, password]
        );
        
        return user;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function getUserById(userId) {
    try {
        const { rows: [user] } = await client.query(`
  SELECT *
  FROM users
  WHERE id = $1
  `[userId]);

        if (user) {
            delete user.password;
            return user;
        }

    } catch (error) {
        console.error(error)
        throw error;
    }
}

async function getUserByUsername(username) {
    try {
        const { rows: [user] } = await client.query(`
    SELECT *
    FROM users
    WHERE username = $1
    `, [username]);

        return user;

    } catch (error) {
        console.log(error)
        throw error;
    }

}

module.exports = {
    createUser,
    getUser,
    getUserById,
    getUserByUsername,
}