import express from 'express';
import 'dotenv/config' 
import { Appinit } from './src/App.router.js';
import { connectDB } from './DB/connection.js';


const app = express();
 
Appinit (app, express);

const PORT = process.env.PORT || 9000;

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`server running on port ${PORT}`)
	})
}).catch (err =>{
	console.error('Error connecting to database:', err);
})
