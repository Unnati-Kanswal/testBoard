import taskModel from "../model/Tasks.js";

export const createTask = async (req, res) => {
  const { paramsboardId } = req.params.paramsboardId;
  const { title, description, status, priority, assignedTo, dueDate, boardId } =
    req.body;
  try {
    // if (paramsboardId === req.body.boardId) {
    const newTask = await taskModel.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      assignedTo: req.body.assignedTo,
      dueDate: req.body.dueDate,
      boardId: req.body.boardId,
    });
    console.log(newTask);
    res.status(201).json({ message: "Task created successfully!!" });
    // }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in createTask Controller!!", error);
  }
};

export const getTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await taskModel.findById(id);
    if (!task) {
      res.status(404).json({ message: "Task not found!!" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getTask Controller!!", error);
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description, status, priority, assignedTo, dueDate, boardId } =
    req.body;
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      { _id: id },
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        assignedTo: req.body.assignedTo,
        dueDate: req.body.dueDate,
        boardId: req.body.boardId,
      },
      { new: true }
    );
    res.status(200).json({ data: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in updateTask Controller!!", error);
  }
};

export const delTask = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTask = await taskModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully!!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in deleteTask Controller!!", error);
  }
};
