import nc from "next-connect"
import passport from "passport"
import cors from "cors"
import expressSession from "express-session"
import connectDB from "../../../db/mongoDBConnection"
import initializingPassport from "../../../utils/passport-jwt"
import MeditationList from "../../../schema/meditation.schema"

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
  .get(async (req, res) => {
    const meditationId = req.query.id;
    try {
      const meditation = await MeditationList.findById(meditationId);
      res.status(200).json(meditation)
    } catch (error) {
      return res.status(400).json({ message: "Meditation not found" })
    }
  })
  .put(async (req, res) => {
    const { name, category_name, link } = req.body;
    const meditationId = req.query.id;
    try {
      const updateMeditation = await MeditationList.findOneAndUpdate({ _id: meditationId }, { name, category_name, link })
      if (updateMeditation) {
        res.json(updateMeditation)
        return res.end()
      } else {
        return res.status(400).json({
          message: 'Unable to update meditation',
          user: updateMeditation
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Unable to update meditation',
      });
    }
  })
  .delete(async (req, res) => {
    const meditationId = req.query.id;
    try {
      const removedMeditation = await MeditationList.findOneAndRemove({ _id: meditationId })
      if (removedMeditation) {
        res.json(removedMeditation)
        return res.end()
      } else {
        return res.status(400).json({
          message: 'Unable to delete meditation',
          user: removedMeditation
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Unable to delete meditation',
      });
    }
  });

export default handler;