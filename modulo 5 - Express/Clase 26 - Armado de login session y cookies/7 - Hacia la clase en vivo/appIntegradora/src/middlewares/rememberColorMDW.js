const rememberColorMDW = (req, res, next) => {
	let color = req.cookies.bkg
    if(color){
        req.session.bkg = color;
	}
    if(req.session.bkg){
        res.locals.bkg = color
    }
    next()
}
module.exports = rememberColorMDW