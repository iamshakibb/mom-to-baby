import nc from "next-connect"
import passport from "passport"
import cors from "cors"
import expressSession from "express-session"
import connectDB from "../../../db/mongoDBConnection"
import initializingPassport from "../../../utils/passport-jwt"
import jwt from 'jsonwebtoken'
import FoodList from "../../../schema/foodList.schema"

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
    const foodItemId = req.query.id;
    try {
      const foodItem = await FoodList.findById(foodItemId);
      res.status(200).json(foodItem)
    } catch (error) {
      return res.status(400).json({ message: "Food Item not found" })
    }
  })
  .put(async (req, res) => {
    const { name, image, category_name, disease, calorie } = req.body;
    const foodItemId = req.query?.id;
    try {
      const updateFoodItem = await FoodList.findOneAndUpdate({ _id: foodItemId }, { name, image, category_name, disease, calorie })
      if (updateFoodItem) {
        res.json(updateFoodItem)
        return res.end()
      } else {
        return res.status(400).json({
          message: 'Unable to update food item',
          user: updateFoodItem
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Unable to update food item',
      });
    }
  })
  .delete(async (req, res) => {
    const foodItemId = req.query?.id;
    try {
      const removedItem = await FoodList.findOneAndRemove({ _id: foodItemId })
      console.log({ removedItem });
      if (removedItem) {
        res.json(removedItem)
        return res.end()
      } else {
        return res.status(400).json({
          message: 'Unable to delete food item',
          user: removedItem
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Unable to delete food item',
      });
    }
  });

export default handler;