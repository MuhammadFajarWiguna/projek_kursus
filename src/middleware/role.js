// exports.onlyMentor = (req, res, next) => {
//     if (req.user.role !== "mentor") {
//         return res.status(403).json({message: "Akun khusus mentor"});
//     }

const { all } = require("../pendaftaran/route");

//     next();
// };

// exports.onlySiswa = (req, res, next) => {
//     if (req.user.role !== "siswa") {
//         retur
//     }
// }

const allowRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Akses ditolak"
            });
        }
        next()
    }
}

module.exports =  allowRoles;