import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  _id: String,
  title: String,
  time: Number,
  ingredients: [String],
  instructions: String,
  yield: String,
  nutrition: String,
});

mongoose.model("recipes", recipeSchema);
