import mongoose from "mongoose";

const connectDB = () => {
  const url = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@noteit.yjcnh.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`
  mongoose.connect(
    url,
    {
      useNewUrlParser: true, useUnifiedTopology: true
    },
    (err) => {
      if(err) console.log(err);
      else console.log("DB Connected!!")
    }
  )
}

export default connectDB