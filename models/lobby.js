import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    lobbyCode: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Lobby = mongoose.models.Lobby || model("Lobby", schema);
