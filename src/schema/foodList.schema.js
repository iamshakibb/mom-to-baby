import { Schema, model, models } from "mongoose";

const foodListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  disease: [{ type: String, required: true }],
  category_name: [{ type: String, required: true }],
  calorie: { type: Number, required: true }
})

const FoodList = models.foodList || model('foodList', foodListSchema)

export default FoodList

