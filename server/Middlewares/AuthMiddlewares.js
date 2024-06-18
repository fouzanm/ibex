const User = require("../Models/Users");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.ibex;
    if (token) {
        jwt.verify(token, "ibex login secret key", async (err, decodedToken) => {
            if (err) res.json({status: false});
            else {
                const user = await User.findById(decodedToken.id);
                if (user) res.json({status: true, user: user.email});
                else res.json({status: false});
            }
            next();
        });
    };
};