import { Lobby } from "../models/lobby.js";

const getLobbyInfo = async (req, res) => {
  try {
    const lobby = await Lobby.findOne({});
    res.status(200).json({
      success: true,
      message: "Lobby Information found",
      lobby,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateLobbyInfo = async (req, res, next) => {
  try {
    const { lobbyCode, createdBy, message } = req.body;
    if (!lobbyCode || !createdBy) {
      return next(new Error("Please provide mendatory fields"));
    }
    let lobby;
    if (!message) {
      lobby = { lobbyCode, createdBy, message: "" };
    } else {
      lobby = { lobbyCode, createdBy, message };
    }
    await Lobby.findOneAndUpdate(
      {},
      {
        lobbyCode: lobby.lobbyCode,
        createdBy: lobby.createdBy,
        message: lobby.message,
      }
    );
    res.status(200).json({
      success: true,
      message: "New Lobby Created",
      lobby,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Something Went Wrong while updating",
    });
  }
};

export { getLobbyInfo, updateLobbyInfo };
