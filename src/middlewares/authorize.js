export const authorize = (...allowedRoles) => (req, res, next) => {
	if(!req.user || !allowedRoles.includes(req.user.role)){
		return res.status(403).json({
			message : "Forbidden access"
		})
	}
	next() ;
}