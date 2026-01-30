const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { jwtSecret, jwtExpire } = require("../infrastructure/config/jwt.js");
const service = require("./service.js");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await service.cariUserByEmail(email);
    if (!user) {
        return res.status(404).json({message: "User tidak ditemukan"});
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({message: "Maaf, Password salah"});
    }

    const token = jwt.sign(
        {id: user.id, role: user.role, email: user.email},
        jwtSecret,
        {expiresIn: jwtExpire}
    );

    res.json(200).json({message: "Login sukses", token})

}