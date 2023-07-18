const jwt = require("jsonwebtoken")


JWT_SECRET = "our secret";
const user = {
    username: karilys,
    password: karilys123
};

const token = jwt.sign(user, JWT_SECRET);
console.log(token)


const userInfo = jwt.verify(token, JWT_SECRET);