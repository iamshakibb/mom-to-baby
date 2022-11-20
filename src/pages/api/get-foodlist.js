
import nc from "next-connect"
import passport, { use } from "passport"
import cors from "cors"
import connectDB from "../../db/mongoDBConnection"
import FoodList from "../../schema/foodList.schema"

const handler = nc({
  onError: (err, req, res, next) => {
    // console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(cors())
  .use((req, res, next) => {
    connectDB()
    next()
  })
  .get(async (req, res) => {
    try {
      const foodList = await FoodList.find()
      return res.status(200).json(foodList)
    } catch (error) {
      res.status(400).json({ message: "Something went wrong!" })
    }
  });

export default handler;