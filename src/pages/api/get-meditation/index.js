import nc from "next-connect"
import passport from "passport"
import cors from "cors"
import connectDB from "../../../db/mongoDBConnection"
import MeditationList from "../../../schema/meditation.schema";

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
    const category_name = req.query?.category_name
    try {
      let meditationList;
      !category_name ? meditationList = await MeditationList.find() : meditationList = await MeditationList.find({ category_name: { $in: category_name.toLowerCase() } })
      return res.status(200).json(meditationList)
    } catch (error) {
      res.status(400).json({ message: "Something went wrong!" })
    }
  });

export default handler;