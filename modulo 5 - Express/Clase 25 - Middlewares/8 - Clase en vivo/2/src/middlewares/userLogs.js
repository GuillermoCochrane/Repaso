
const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../logs/userLogs.txt');

const logMDW = (req, res, next)=>{
    fs.appendFileSync(logFilePath, "El usuario ingresó a la ruta: " + req.url+ "\n")
    next()
}

module.exports = logMDW
