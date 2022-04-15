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

ListModelSchema.methods.toJSON = function ListReturn() {
  const thisObject = this.toObject();
  return {  ...thisObject, id:thisObject?._id };
};

export const ListModel = model<listModelType>("List", ListModelSchema);
