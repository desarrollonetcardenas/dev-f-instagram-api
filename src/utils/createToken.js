const jwt = require('jsonwebtoken');

module.exports = ( user )  => {
    const MY_SECRET = process.env.MY_SECRET || "HolaMundo";
    const payload = {
        id: user._id,
        email: user.email,
        password: user.password
    };

    let token = jwt.sign( payload, MY_SECRET);

    return token;
};

