import bcrypt from "bcrypt"
import connectDB from "../../../db/mongoDBConnection"
import User from "../../../schema/user.schema"

export default async function handler(req, res) {
  connectDB()

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({ error: "Don't have form data!" })
    }
    const { email, name, password } = req.body
    const user = await User.findOne({ email });
    if (user) return res.status(422).json({ message: "User already exist" })

    bcrypt.hash(password, 12, function (err, hash) {
      User.create({
        name, email, password: hash
      }, (err, data) => {
        if (err) return res.status(404).json({ err })

        res.status(200)
        res.end()
      })
    });
  } else {
    res.status(500).json({ message: "HTTP method not found." })
  }
}
