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

favModelSchema.methods.toObject = function favReturn() {
    const thisObject = this.toJSON();
    return { ...thisObject, id: thisObject?._id };
};


export const FavModel = model<favModelType>("Fav", favModelSchema);
