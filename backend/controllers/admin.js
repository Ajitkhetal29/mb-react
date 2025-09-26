import adminModel from "../models/admin.js";
import jwt from "jsonwebtoken";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

const login = async (req, res) => { 

    console.log("login called");
    console.log(req.body);


    try {

        const { username, password } = req.body;
        const admin = await adminModel.findOne({ username });

        if (!admin) {

            return res.status(400).json({ success: false, message: "user not found" })
        }

        if (password !== admin.password) {
            return res.status(400).json({ success: false, message: "Password Wrong" })
        }

        const token = createToken(admin._id)

        res.status(201).json({ success: true, message: "Login Successfull", token })


    } catch (error) {
        console.log(error);

    }

}

export default login

