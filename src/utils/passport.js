import connectDB from "../db/mongoDBConnection"
import { Strategy } from 'passport-local'
import User from "../schema/user.schema"
import bcrypt from 'bcrypt'

const initializingPassport = (passport) => {
  passport.use(
    new Strategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, "User not exist")
        }
        const isMatch = await bcrypt.compare(password, user.password)
        return isMatch ? done(null, user, { message: "Successfull" }) : done(null, false, { message: "User does not exist" })
      } catch (error) {
        done(error)
      }
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  })
}

export default initializingPassport