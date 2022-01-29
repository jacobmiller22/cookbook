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

//@ts-expect-error
mongoose.models = {};
const Recipe = mongoose.model("recipes", recipeSchema);

export default Recipe;
