
import nc from "next-connect"
import passport from "passport"
import cors from "cors"
import expressSession from "express-session"
import "../../utils/passport"
import connectDB from "../../db/mongoDBConnection"
import initializingPassport from "../../utils/passport-jwt"
import jwt from 'jsonwebtoken'
import User from "../../schema/user.schema"

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
  .put(async (req, res) => {
    const email = req.body?.email
    try {
      const updateUser = await User.findOneAndUpdate({ email }, { admin: true })
      if (updateUser) {
        res.json({ user: updateUser })
        return res.end()
      } else {
        return res.status(400).json({
          message: 'user not found!',
          user: updateUser
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: 'user not found!',
        user: updateUser
      });
    }
  });

export default handler;