
import nc from "next-connect"
import passport from "passport"
import cors from "cors"
import expressSession from "express-session"
import "../../utils/passport"
import connectDB from "../../db/mongoDBConnection"
import initializingPassport from "../../utils/passport-jwt"
import jwt from 'jsonwebtoken'

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
    const user = req.user
    if (user && Object.keys(user).length !== 0) {
      return res.status(200).json({ user })
    }
    res.status(400).json({ message: "User Not found" })
  });

export default handler;