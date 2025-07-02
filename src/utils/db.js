import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL ;

if(!MONGODB_URI){
	throw new Error("MongoDB URL not defined") ;
}

export const connectDB = async () => {
	try{
		await mongoose.connect(MONGODB_URI,{
			useNewUrlParser : true ,
			useUnifiedTopology : true ,
		}) ;
		console.log("MongoDB connected") ;
	}
	catch(err){
		console.log("MongoDB error :",err) ;
		process.exit(1) ;
	}
}