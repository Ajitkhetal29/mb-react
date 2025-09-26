import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import adminRouter from "./routes/admin.js";
import projectRouter from "./routes/project.js";
import path from 'path'



const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(process.cwd(), "uploads")))

connectDb();

app.use('/api/admin', adminRouter)
app.use('/api/project', projectRouter)



app.listen(3000, () => {
    console.log('Server is running ');

})


// const createAdmin = async () => {
//     await adminModel.insertOne({
//         "username": "admin",
//         "password": "123456789"
//     })
// }

// createAdmin();


