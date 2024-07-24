import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import games from "./routes/games.js";
import logger from "./middleware/logger.js"
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import path from "path";
import igdbAuth from "./middleware/igdbAuth.js";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const port = process.env.PORT || 8000;
const app = express(); 
app.locals.igdbAuth = false;
app.locals.token = {};

//CORS setup
app.use(cors());
//IGDB Authtentication
app.use(igdbAuth);


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//Logger Middleware
app.use(logger)
 

app.use('/api/games',games);


app.use(notFound);
app.use(errorHandler);
// app.post('/api/setGame', (req, res) => {
//   // Extract data from the request body
//   const { name } = req.body;

//   // Do something with the data (e.g., store it, process it)
//   console.log(`Received data: Name - ${name}`);

//   // Send back a response
//   res.json({ message: 'Data received successfully' });
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`); 
})