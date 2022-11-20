import passportJWT from 'passport-jwt'
import User from '../schema/user.schema';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const initializingPassport = (passport) => {
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_Token_Secret
  }, async (payload, cb) => {
    try {
      const user = await User.findById(payload._id)
      return cb(null, user)
    } catch (error) {
      return cb(error, false, { message: 'user not found' })
    }
  }))

}

export default initializingPassport