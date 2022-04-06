import  express from "express";
import cors from 'cors'
import { medCompaniesRouter } from "./controllers/medCompanies-controllers.js";
import { medicamentsRouter } from "./controllers/medicaments-controllers.js";




const app = express();

app.use(express.json())
app.use(cors())

 app.use('/api', medCompaniesRouter)
 app.use('/api', medicamentsRouter)



app.listen(5000, () => {
    console.log('Server started on port 5000');
})