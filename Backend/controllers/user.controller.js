import userModel from "../model/user.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { name, password } = req.body;
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = await userModel.create({ name, password: hashedPassword });
    res.status(200).json({ messge: "User created successfully!!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in signup Controller!!", error);
  }
};

export const signin = async (req, res) => {
  const { name, password } = req.body;
  try {
    const validUser = await userModel.find({ name: name });
    if (!validUser) {
      res.status(404).json("User not found!!");
    }
    const validpassword = bcryptjs.compareSync(password, req.body.password);
    res.status(200).json(validUser);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in signin Controller!!", error);
  }
};
