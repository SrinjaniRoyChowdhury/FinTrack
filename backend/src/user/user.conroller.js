import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// signup
export const createUser = async(req,res) => {
    try {
        const data = req.body;
        const user = User(data);
        await user.save();
        res.json(user);
    } catch(err) {
        res.status(500).json({message : err.message});
    }
}

// login
const createToken = async (user) => {
    const payload = {
        id : user._id,
        name : user.name,
        email : user.email,
        role : user.role
    }

    const token = jwt.sign(payload, process.env.AUTH_SECRET, {expiresIn:"1d"});
    return token;
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) 
            return res.send(404).json({message : "User not found !"});
        const isLogged = await bcrypt.compare(password, user.password);
        if (!isLogged)
            return res.send(401).json({message : "Incorrect password !"});

        const token = await createToken(user);
        res.cookie("authToken", token, {
            maxAge : 86400000, //60*60*24*1000
            domain : process.env.ENVIRONMENT === "DEV" ? "localhost" : process.env.DOMAIN,
            secure : process.env.ENVIRONMENT === "DEV" ? false : true,
            httpOnly : true
        });
        res.json({message : "Login Success"})

    } catch(err) {
        res.status(500).json({ message : err.message});
    }
}

