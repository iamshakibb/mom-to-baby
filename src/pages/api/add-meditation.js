
import nc from "next-connect"
import passport, { use } from "passport"
import cors from "cors"
import connectDB from "../../db/mongoDBConnection"
import initializingPassport from "../../utils/passport-jwt"
import expressSession from "express-session"
import MeditationList from "../../schema/meditation.schema"

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
    const { name, category_name, link } = req.body
    try {
      const food = await MeditationList.create({
        name,
        category_name,
        link
      })
      return res.status(200).json(food)
    } catch (error) {
      res.status(400).json({ message: error?.message || "Something went wrong!" })
    }
  });

export default handler;

