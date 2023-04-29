const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const register = async (req, res, next) => {
    const { name, phone, email, password,} = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            email: email,
            phone:phone,
            password: hashPassword,

        });
        if(user){
            res.status(201).json({ msg: `Data inserted with id ${User._id}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }
}

const login = async (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    const user = await User.findOne({$or: [{"email":username}, {"phone":username}]});

    if(user) {
       // if true
       if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign(user.email, process.env.AUTH_TOKEN_SECRET);
          res.json({
             message: 'login Successful', 
             token,
          });
       } else {
	  res.status(400).json("invalid credential");
       }
    } else {
       res.status(400).json("not found");
    }
}


module.exports = {
    register, login
}