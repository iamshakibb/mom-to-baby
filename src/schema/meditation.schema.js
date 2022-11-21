import { Schema, model, models } from "mongoose";

const meditationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  category_name: [{ type: String, required: true }]
})

const MeditationList = models.meditation || model('meditation', meditationSchema)

export default MeditationList

