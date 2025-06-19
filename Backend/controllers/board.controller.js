import boardModel from "../model/Board.js";

export const createBoard = async (req, res) => {
  const { name } = req.body;
  try {
    const newBoard = await boardModel.create({ name: req.body.name });
    res.status(201).json({ message: "Board created successfully!!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in createBoard Controller!!", error);
  }
};

export const getBoard = async (req, res) => {
  try {
    const result = await boardModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getBoard Controller!!", error);
  }
};
