import { model, Schema, Types } from "mongoose";
import { listModelType } from "./listModelType";

const ListModelSchema = new Schema<listModelType>(
  {
    name: {
      type: String,
      required: [true, "a name is required"],
    },
    favs: [
      {
        type: Types.ObjectId,
        ref: "Fav"
      }
    ],
  },
  {
    timestamps: true,
  }
);



export const ListModel = model<listModelType>("List", ListModelSchema);
