import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.option.js";

export default mongoose.model(
    "Favorite", mongoose.Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: "USer",
            require: true,
        },
        mediaType: {
            type: String,
            enum: ["tv", "movie"],
            require: true,
        },

        mediaId: {
            type: String,
            require: true,
        },
        mediaTitle: {
            type: String,
            require: true,
        },
        mediaPoster: {
            type: String,
            require: true,
        },
        mediaRate: {
            type: Number,
            require: true,
        },
    }.modelOptions)
)