const adminMDW = (req, res, next)=>{
    let user = req.query.user
    let admins = [ "Ada", "Greta", "Vim", "Tim"]
    if( admins.includes(user)){
        return res.send('Hola Admin: ' + user)
    }else{
        return res.send('No tienes los privilegios para ingresar')
    }
}

module.exports = adminMDW
