import { favModelType } from './favModelType.d';
import { model, Schema } from "mongoose";


const favModelSchema = new Schema<favModelType>(
    {
        title: {
            type: String,
            required: [true, "a title is required"],
        },
        description: {
            type: String,
            required: [true, "a description is required"],
        },
        link: {
            type: String,
            required: [true, "a link is required"],
        },
    },
    {
        timestamps: true,
    }
);



export const FavModel = model<favModelType>("Fav", favModelSchema);
