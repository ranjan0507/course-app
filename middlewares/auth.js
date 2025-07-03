import jwt from 'jsonwebtoken' ;

export const authenticate = (req, res, next) => {
	const authHeader = req.header.authorization ;
	if (!authHeader?.startsWith('Bearer ')) {
    	return res.status(401).json({ message: 'Missing or malformed token' });
    }
	const token = authHeader.split(' ')[1] ;
	
	try {
		const decoded = jwt.verify(token,process.env.JWT_SECRET) ;
		req.user = decoded ;
		next() ;
	} catch (error) {
		return res.status(401).json({
			message : 'Invalid token' 
		})
	}
}

