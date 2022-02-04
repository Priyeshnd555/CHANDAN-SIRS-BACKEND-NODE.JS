const bcrypt = require("bcryptjs");
const userModel = require("../models/users");

const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { fname, lname, email, password, role } = req.body;
  try {
    const emailExists = await userModel.findOne({ email: email }).lean();

    if (emailExists) {
      res.status(500).json({
        error: true,
        messsage: "Email already Exists",
        data: null,
      });
    } else {
      const saltRounds = 10;

      // salting
      const salt = await bcrypt.genSalt(saltRounds);
      console.log("salt"+salt);

      //hasing;
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(hashedPassword);

      await userModel.insertMany([
        { fname, lname, email, role, password: hashedPassword },
      ]);

      res.status(200).json({
        error: false,
        message: "user Registration Successful",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userData = await userModel.findOne({ email }).lean();
    if (userData) {
      const { fname, lname, role } = userData;
      //comparing the hashed password with normal text pwd entered by
      //user using the bcrypt.compare method
      const isPasswordMatch = await bcrypt.compare(password, userData.password);

      if (isPasswordMatch) {
        const payload = {
          fname,
          lname,
          role,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: "10h",
        });
        res.status(200).json({
          error: false,
          message: "Login Succesfull",
          data: {
            payload,
            token
          },
        });
      } else {
        res.status(401).json({
          error: true,
          message: "Invalid password",
          data: null,
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: "Email does not exist , please create acccount ",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
