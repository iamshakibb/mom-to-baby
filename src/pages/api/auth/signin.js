
import nc from "next-connect"
import passport from "passport"
import cors from "cors"
import expressSession from "express-session"
import "../../../utils/passport"
import connectDB from "../../../db/mongoDBConnection"
import initializingPassport from "../../../utils/passport"
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
  .use(passport.initialize())
  .use(passport.session())
  .post(async (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info || 'Something is not right',
          user: user
        });
      } req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }

        const token = jwt.sign(user.toJSON(), process.env.JWT_Token_Secret);
        return res.json({
          user: {
            id: user._id,
            email: user.email,
            name: user.name,
            admin: user.admin
          }, token
        });
      });
    })(req, res);
  });

export default handler;