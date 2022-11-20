
import nc from "next-connect"
import passport, { use } from "passport"
import cors from "cors"
import connectDB from "../../db/mongoDBConnection"
import jwt from 'jsonwebtoken'
import FoodList from "../../schema/foodList.schema"
import initializingPassport from "../../utils/passport-jwt"
import expressSession from "express-session"
import cloudinary from "../../utils/cloudinary"

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
  .use(expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  }))
  .use((req, res, next) => {
    connectDB();
    initializingPassport(passport)
    next()
  })
  .use(passport.authenticate('jwt', { session: false }))
  .post(async (req, res) => {
    const { name, image, category_name, disease, calorie } = req.body
    try {
      const uploadedImage = await uploadImage(image, res)
      const food = await FoodList.create({
        name,
        image: uploadedImage.url,
        category_name,
        disease,
        calorie
      })

      return res.status(200).json(food)
    } catch (error) {
      res.status(400).json({ message: error?.message || "Something went wrong!" })
    }
  });

export default handler;


const uploadImage = async (image, res) => {
  try {
    const uploadImage = await cloudinary.uploader.upload(image, {
      upload_preset: process.env.Cloudinary_preset
    })
    return uploadImage
  } catch (error) {
    res.status(400).json({ message: "Unable to upload Image" })
  }
}