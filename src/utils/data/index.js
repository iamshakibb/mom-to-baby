import { randomId } from '../randomId';

export const foodList = [
  {
    id: randomId(),
    name: "Meat",
    image: "/images/meat.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Chicken",
    image: "/images/chicken.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Fish",
    image: "/images/Fish.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Egg",
    image: "/images/eggs.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Beans",
    image: "/images/beans.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Spinach",
    image: "/images/Spinach.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Broccoli",
    image: "/images/broccoli.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Nuts",
    image: "/images/nuts.png",
    disease: ['anemia']
  },
  {
    id: randomId(),
    name: "Yogurt",
    image: "/images/yogurt.png",
    disease: ['urinary tract infection']
  },
  {
    id: randomId(),
    name: "Blueberries",
    image: "/images/blueberries.png",
    disease: ['urinary tract infection']
  },
  {
    id: randomId(),
    name: "Pickle",
    image: "/images/pickle.png",
    disease: ['urinary tract infection']
  },
  {
    id: randomId(),
    name: "Canberry Juice",
    image: "/images/canberry_juice.png",
    disease: ['urinary tract infection']
  },
  {
    id: randomId(),
    name: "Potatoes",
    image: "/images/potatoes.jpg",
    disease: ['hypertension']
  },
  {
    id: randomId(),
    name: "Tomatoes",
    image: "/images/tomatoes.jpg",
    disease: ['hypertension']
  },
  {
    id: randomId(),
    name: "Sweet Potatoes",
    image: "/images/sweet_potatoes.jpg",
    disease: ['hypertension']
  },
  {
    id: randomId(),
    name: "Kidney Beans",
    image: "/images/kidney_beans.jpg",
    disease: ['hypertension']
  },
  {
    id: randomId(),
    name: "Orange",
    image: "/images/orange.jpg",
    disease: ['hypertension']
  },
  {
    id: randomId(),
    name: "Bananas",
    image: "/images/bananas.jpg",
    disease: ['hypertension', 'diabetes']
  },
  {
    id: randomId(),
    name: "Melon",
    image: "/images/melon.jpg",
    disease: ['hypertension', 'diabetes']
  },
  {
    id: randomId(),
    name: "Peas",
    image: "/images/peas.jpg",
    disease: ['hypertension', 'diabetes']
  },
  {
    id: randomId(),
    name: "Milk",
    image: "/images/milk.jpg",
    disease: ['diabetes']
  },
  {
    id: randomId(),
    name: "Apples",
    image: "/images/apples.jpg",
    disease: ['diabetes']
  },
  {
    id: randomId(),
    name: "Mangoes",
    image: "/images/mango.jpg",
    disease: ['diabetes']
  },
  {
    id: randomId(),
    name: "Brown rice",
    image: "/images/rice.jpg",
    disease: ['diabetes']
  },
  {
    id: randomId(),
    name: "Oats",
    image: "/images/oats.jpg",
    disease: ['diabetes']
  },
]

export const plans = [
  {
    name: 'anemia',
    advice: 'Take a lot of vitamin C'
  },
  {
    name: 'urinary tract infection',
    advice: 'Drink a lot of water'
  },
  {
    name: 'hypertension',
    advice: 'Eat a lot of green vegetables!'
  },
  {
    name: 'diabetes',
    advice: 'Do not add sugar, honey or syrup to your foods!'
  }
]

export const meditation = [
  {
    id: randomId(),
    meditation_name: 'relaxation yoga',
    image: '/images/meditation8.jpg',
    slug: 'relaxation_yoga',
    list: [
      {
        id: randomId(),
        name: "Pregnancy meditation with pregnancy affirmations",
        link: "https://youtu.be/d7TC9w2xr_g",
      },
      {
        id: randomId(),
        name: "Prenatal bedtime yoga",
        link: 'https://youtu.be/efm89ipV6Kc'
      },
      {
        id: randomId(),
        name: "calming and breathing yoga",
        link: 'https://youtu.be/L9kxAaQs-b4'
      },
      {
        id: randomId(),
        name: "Evening prenatal yoga",
        link: "https://youtu.be/wjygmw2LY6c"
      },
      {
        id: randomId(),
        name: "beginner techniques",
        link: "https://youtu.be/B87FpWtkIKA"
      },
      {
        id: randomId(),
        name: "yoga for labour oriented endurance",
        link: "https://youtu.be/PiSp9fnekZc"
      },
      // {
      //   id: randomId(),
      //   name: "restorative prenatal yoga",
      //   link: "https://youtu.be/feVaUSI9pl4"
      // },
      {
        id: randomId(),
        name: "Evening calming yoga",
        link: "https://youtu.be/j62_TQxfUwA"
      },
      // {
      //   id: randomId(),
      //   name: "yoga for neck and shoulder relief",
      //   link: "https://youtu.be/CIDlPxzXCic"
      // },
      {
        id: randomId(),
        name: "pregnancy  yoga~ surrender and let go",
        link: "https://youtu.be/DIHugD8FegU"
      }
    ]
  },
  {
    id: randomId(),
    meditation_name: 'relaxation music',
    image: '/images/meditation5.jpg',
    slug: 'relaxation_music',
    list: [
      {
        id: randomId(),
        name: 'Music to make baby move',
        link: 'https://youtu.be/uks3mGAOfsc',
      },
      // {
      //   id: randomId(),
      //   name: 'music for unborn\'s brain development ',
      //   link: 'https://youtu.be/L0zS7RLURlw'
      // },
      {
        id: randomId(),
        name: 'peaceful and soothing music for mother to be',
        link: 'https://youtu.be/lpRqLh6IGN4'
      },
      // {
      //   id: randomId(),
      //   name: 'relax the baby in the womb',
      //   link: 'https://youtu.be/i53uhTilaao'
      // },
      {
        id: randomId(),
        name: 'healing meditation',
        link: 'https://youtu.be/gb00DyhrfhM'
      },
      {
        id: randomId(),
        name: 'hypnobirthing music for labour',
        link: 'https://youtu.be/PHT8bHBjK8Q'
      },
      {
        id: randomId(),
        name: 'classical music for unborn',
        link: 'https://youtu.be/KdHlCYMxlgw'
      },
      {
        id: randomId(),
        name: 'music for making baby kick',
        link: 'https://youtu.be/01ZMTkoAhyM'
      },
      {
        id: randomId(),
        name: 'brain development music for unborn',
        link: 'https://youtu.be/3znHCBXKx4E'
      },
      {
        id: randomId(),
        name: 'peaceful nature songs',
        link: 'https://youtu.be/fX7MfEBUKog'
      },
    ]
  },
  {
    id: randomId(),
    meditation_name: 'Fear clearing',
    image: '/images/meditation4.jpg',
    slug: "fear_clearing",
    list: [
      {
        id: randomId(),
        name: 'fear clearing affirmation meditation',
        link: 'https://youtu.be/8h7wr27yAM8',
      },
      {
        id: randomId(),
        name: 'Manange your fears',
        link: 'https://youtu.be/U4JIuMYLQU0'
      },
      {
        id: randomId(),
        name: 'wash away your anxious thoughts',
        link: 'https://youtu.be/lB9gHnJWV9w'
      },
      {
        id: randomId(),
        name: 'meditation for pregnancy anxiety',
        link: 'https://youtu.be/QEaX-jDStL4'
      },
      {
        id: randomId(),
        name: 'fear release  for pregnancy',
        link: 'https://youtu.be/V-EUeUKkaJo'
      },
      {
        id: randomId(),
        name: 'release anxiety and fear',
        link: 'https://youtu.be/sPPoQfBapoY'
      },
      {
        id: randomId(),
        name: 'meditation for releasing anxiety',
        link: 'https://youtu.be/2LprXjNWsAo'
      },
      {
        id: randomId(),
        name: 'overcoming fear and anxiety about birth in 6 steps',
        link: 'https://youtu.be/OK8DhpPDM_c'
      },
      // {
      //   id: randomId(),
      //   name: 'anxiety releasing tips for early pregnancy',
      //   link: 'https://youtu.be/veVn3cyul4o'
      // },
      {
        id: randomId(),
        name: 'visualizing  your positive Birth',
        link: 'https://youtu.be/7by6iwHASTM'
      },
    ]
  },
  {
    id: randomId(),
    meditation_name: 'Mindfulness',
    image: '/images/meditation11.jpg',
    slug: 'mindfulness',
    list: [
      {
        id: randomId(),
        name: 'practicing mindfulness during pregnancy ',
        link: 'https://youtu.be/p1Ptn7n6bok',
      },
      {
        id: randomId(),
        name: 'connect to your baby in the womb',
        link: 'https://youtu.be/aEqbw1zN_CE'
      },
      {
        id: randomId(),
        name: 'Finding your deep breath ',
        link: 'https://youtu.be/wjWc9PU_J2U'
      },
      {
        id: randomId(),
        name: 'connecting to your body',
        link: 'https://youtu.be/eSAQs28xfaw'
      },
      {
        id: randomId(),
        name: 'calm morning for a productive day',
        link: 'https://youtu.be/u3pH-zDBYLk'
      },
      {
        id: randomId(),
        name: 'connecting with your divine baby',
        link: 'https://youtu.be/d49503g0aqQ'
      },
      {
        id: randomId(),
        name: 'mindfulness for pregnant and new mom',
        link: 'https://youtu.be/luxkgezgPoI'
      },
      {
        id: randomId(),
        name: 'Meditation for bringing mental stability',
        link: 'https://youtu.be/eZqMqBsPQek'
      },
      {
        id: randomId(),
        name: 'calm your mind and body',
        link: 'https://youtu.be/gOtNlxPwOW4'
      },
      {
        id: randomId(),
        name: 'yoga for practicing mindfulness',
        link: 'https://youtu.be/iWEO1b1AOck'
      }
    ]
  }
]

export const recipes = [
  {
    id: randomId(),
    category_name: "Healthy recipes for breakfast",
    image: 'https://www.parents.com/thmb/1aQ60UmE1xr2FIOcCo4Dqms8wCs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/diy-microwave-oatmeal-packets-RU345682-1-0f10a38748b84658aaaa648cea0af1ca.jpg',
    list: [
      {
        id: randomId(),
        name: "Classic Apple-Cinnamon Overnight Oats ",
        image: "https://www.parents.com/thmb/1aQ60UmE1xr2FIOcCo4Dqms8wCs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/diy-microwave-oatmeal-packets-RU345682-1-0f10a38748b84658aaaa648cea0af1ca.jpg",
        decription: "Remembering to prepare these oats before bed may not be easy, but you'll love waking up to a pre-made breakfast. \n Pour 1 cup of nonfat milk over 2/3 cup of rolled oats and stir in 1/4 teaspoon of cinnamon.Cover with plastic wrap and let sit in the fridge overnight.In the morning, add 2 tablespoons of chopped walnuts and a small chopped apple.",
        nutrition: ['Calories: 448.3', 'Protein: 19.6g', 'Carbohydrate: 65.3g', 'Dietary Fiber: 9.148g', 'Total Sugars: 24.2g', 'Total Fat: 13.8g', 'Saturated Fat: 1.84g', 'Cholesterol: 4.94mg', 'Total Omega-3 FA: 1.43g', 'Calcium: 560.1mg', 'Iron: 3.147mg', 'Sodium: 132.1mg', 'Vitamin D: 0mcg', 'Folate: 47.7mcg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: "Egg Wrap",
        image: "https://www.parents.com/thmb/JzuNjBWuI8ZtCaxWuycPq5W-7jg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101260296-5744ac4da2304909a1eb111426380d30.jpg",
        decription: " Craving some Mexican food? This pregnancy recipe will satisfy your early-morning hunger! \n Scramble one egg and one egg white in 2 teaspoons olive oil.Add 1 cup baby spinach and sauté until just wilted.Put the egg- spinach mixture on a 10 - inch whole wheat tortilla, along with 1 / 4 cup reduced- fat shredded Mexican blend cheese and 1 / 4 cup salsa.Roll up and enjoy! ",
        nutrition: ['Calories: 453.4', 'Protein: 26.2g', 'Carbohydrate: 44g', 'Dietary Fiber: 6.86g', 'Total Sugars: 0.941g', 'Total Fat: 21.2g', 'Saturated Fat: 5.989g', 'Cholesterol: 231.5mg', 'Total Omega-3 FA: 0.164g', 'Calcium: 353.8mg', 'Iron: 4.448mg', 'Sodium: 856.6mg', 'Vitamin D: 0.438mcg', 'Folate: 123.6mcg', 'Folic Acid: 16.8mcg']
      },
      {
        id: randomId(),
        name: "Pear and Cheese Breakfast Sandwich",
        image: "https://www.parents.com/thmb/L3nXWxsBunjrK73XK6aCO3-ojhM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101052725-929215fcf59745d4aa41be8347784b65.jpg",
        decription: " An English muffin turns this traditional lunchtime sandwich into a fun breakfast option. Separate the two sides of a whole wheat English muffin. Place 1/2 of a large pear, sliced, on one half and top with a 1-ounce slice of cheddar cheese. \n Put both halves under the broiler for 2–3 minutes, until the top browns and the cheese is melted.Sandwich the two halves together.Serve with the remaining half of the pear spread with 2 teaspoons of almond butter.",
        nutrition: ['Calories: 447.5', 'Protein: 15.1g', 'Carbohydrate: 64.5g', 'Dietary Fiber: 12.6g', 'Total Sugars: 23.2g', 'Total Fat: 17.5g', 'Saturated Fat: 6.914g', 'Cholesterol: 29.8mg', 'Total Omega-3 FA: 0.149g', 'Calcium: 314.7mg', 'Iron: 2.688mg', 'Sodium: 397.9mg', 'Vitamin D: 0.085mcg', 'Folate: 88.7mcg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: "Crunchy Pumpkin Spice Parfait",
        image: "https://www.parents.com/thmb/3C8n8nn1m2vd9PVOK9e1XaOm4YY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101328751-5bca2a1a1e49423aa966c5480059a5cb.jpg",
        decription: "This pregnancy meal is so tasty that it practically doubles as dessert. Stir 1/3 cup canned pumpkin puree (not pumpkin pie filling), 1/4 teaspoon pumpkin pie spice, and 2 teaspoons maple syrup into 1 cup of nonfat plain yogurt. \n Put half of the pumpkin- yogurt mixture into a mug or glass, top with 2 tablespoons granola, 1 tablespoon raisins, and 2 teaspoons chopped cashews.Pour on the remaining yogurt mixture and top with another 2 tablespoons granola, 1 tablespoon raisins, and 2 teaspoons chopped cashews.",
        nutrition: ['Calories: 455.4', 'Protein: 20.7g', 'Carbohydrate: 68g', 'Dietary Fiber: 6.357g', 'Total Sugars: 21.9g', 'Total Fat: 13.7g', 'Saturated Fat: 2.825g', 'Cholesterol: 4.41mg', 'Total Omega-3 FA: 0.027g', 'Calcium: 552.2mg', 'Iron: 3.727mg', 'Sodium: 199.5mg', 'Vitamin D: 0mcg', 'Folate: 71.2mcg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: "Bacon and Egg Frittata",
        image: "https://www.parents.com/thmb/U8wHfixJybFycsvPGqjNrgh9Mb8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_RU206294-f4b745e1c8b040e4b0496707090c00d6.jpg",
        decription: " With this baked dish, you get two breakfast faves—bacon and eggs—in one portable package. Preheat the oven to 350 F. In a medium bowl, whisk together eight eggs with 1/4 teaspoon salt and freshly ground pepper to taste; set aside. Cook and stir 1/4 pound chopped lower-sodium bacon in a 10-inch non-stick, oven-safe skillet over medium until crisp. \n Pour the eggs over the remaining bacon in skillet.Sprinkle evenly with 1 tablespoon finely chopped chives.Transfer the skillet to the oven and bake for 10–12 minutes or until set. \n This recipe makes eight servings.Serve warm, cold, or at room temperature.Refrigerate for up to three days.Enjoy this pregnancy recipe with a medium(16 ounce) nonfat decaf latte and an orange.",
        nutrition: ['Calories: 455.4', 'Protein: 20.7g', 'Carbohydrate: 68g', 'Dietary Fiber: 6.357g', 'Total Sugars: 21.9g', 'Total Fat: 13.7g', 'Saturated Fat: 2.825g', 'Cholesterol: 4.41mg', 'Total Omega-3 FA: 0.027g', 'Calcium: 552.2mg', 'Iron: 3.727mg', 'Sodium: 199.5mg', 'Vitamin D: 0mcg', 'Folate: 71.2mcg', 'Folic Acid: 0mcg']
      },
    ]
  },
  {
    id: randomId(),
    category_name: "Healthy recipes for lunch",
    image: 'https://www.parents.com/thmb/GJ1to5Dut6Vg6g2Pza0zIahl2jM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101351511-f6881b93e20b4a76aa996828931663fd.jpg',
    list: [
      {
        id: randomId(),
        name: "Egg-cellent Veggie and Hummus Pita",
        image: 'https://www.parents.com/thmb/GJ1to5Dut6Vg6g2Pza0zIahl2jM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101351511-f6881b93e20b4a76aa996828931663fd.jpg',
        decription: 'This pita has veggies, eggs, hummus, and tons of flavor! Fill a 6-inch whole wheat pita with 1/4 cup hummus, one sliced hard-boiled egg plus one hard-boiled egg white, 1/3 cup chopped tomato, 1/2 cup baby spinach, a sprinkle of paprika, and 1 tablespoon toasted pine nuts. Serve with a cup of grapes.',
        nutrition: ['Calories: 553.8', 'Protein: 22.4g', 'Carbohydrate: 81.1g', 'Dietary Fiber: 9.963g', 'Total Sugars: 28.3g', 'Total Fat: 18.5g', 'Saturated Fat: 3.116g', 'Cholesterol: 212mg', 'Total Omega-3 FA: 0.172g', 'Calcium: 104.6mg', 'Iron: 5.154mg', 'Sodium: 620.7mg', 'Vitamin D: 0mcg', 'Folate: 125.4mcg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: "Colorful Crab Salad Sandwich",
        image: 'https://www.parents.com/thmb/9gIrM1d96R5GswxDsT7svLyMXpo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101402017-f0d6ff406b844028b1a1b714b860f0ba.jpg',
        decription: ' While some seafood is off-limits during pregnancy, you can indulge in your cravings with this safe and tasty crab salad sandwich. \n Mix a 6-ounce can of crab meat(drained) with 2 tablespoons light mayonnaise, 1/4 cup shredded carrot, 1/4 cup diced celery, and 1 tablespoon chopped red onion.Spread mixture onto a slice of whole wheat bread and top with second slice of bread. \n Serve with 1 / 2 cup rinsed and drained canned white beans tossed with 1 tablespoon chopped red onion, 1 teaspoon olive oil, and 1 tablespoon balsamic vinegar.',
        nutrition: ['Calories: 564.4', 'Protein: 33.2g', 'Carbohydrate: 69.6g', 'Dietary Fiber: 11.9g', 'Total Sugars: 9.441g', 'Total Fat: 20.8g', 'Saturated Fat: 2.286g', 'Cholesterol: 110.5mg', 'Total Omega-3 FA: 1.186g', 'Calcium: 183.2mg', 'Iron: 6.462mg', 'Sodium: 1103mg', 'Vitamin D: 0mcg', 'Folate: 87.6mcg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: "Fiesta Salad",
        image: 'https://www.parents.com/thmb/W8mcHO9g9mhMO1cqUWbEASSpr_s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101419752-24903c33397c4d4bb19ef267fdff3bca.jpg',
        decription: 'Hold the margarita and enjoy this fun, Mexican-inspired, healthy pregnancy meal. Top 2 cups chopped romaine lettuce with 1 cup canned black beans (rinsed and drained), half of a medium baked (or microwaved) sweet potato (cubed, with skin), 1/3 cup diced tomato, and 1/4 cup frozen and thawed corn kernels. \n Drizzle with lime vinaigrette: 1 tablespoon lime juice, 1 tablespoon olive oil, 1/4 teaspoon chopped garlic, and salt and pepper to taste. Sprinkle with 1/4 cup reduced- fat shredded Mexican blend cheese.',
        nutrition: ['Calories: 542.7', 'Protein: 27.4g', 'Carbohydrate: 66.9g', 'Dietary Fiber: 20.7g', 'Total Sugars: 7.892g', 'Total Fat: 21.4g', 'Saturated Fat: 5.26g', 'Cholesterol: 20mg', 'Total Omega-3 FA: 0.401g', 'Calcium: 360mg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: "Loaded Pesto Veggie Burger",
        image: 'https://www.parents.com/thmb/nSloekaz8-3ZjM8jHGwX_WNhjrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101324650-47a61534c5174818a16fefeaa1966a34.jpg',
        decription: 'Cook a veggie burger according to instructions. Using a grill pan sprayed with cooking spray, grill a thick slice of yellow onion and a Portobello mushroom cap. \n Place veggie burger onto half of a whole wheat hamburger bun spread with 2 teaspoons of prepared pesto.Top with a slice of Swiss cheese, Portobello mushroom, onion, and the second half of the bun.Serve with two carrots, cut into sticks, and dipped into 2 tablespoons of hummus.',
        nutrition: ['Calories: 549.1', 'Protein: 33.2g', 'Carbohydrate: 55.4g', 'Dietary Fiber: 11.8g', 'Total Sugars: 13.3g', 'Total Fat: 22.2g', 'Saturated Fat: 7.257g', 'Cholesterol: 30.1mg', 'Total Omega-3 FA: 0.356g', 'Calcium: 413.5mg', 'Iron: 3.905mg', 'Sodium: 867.8mg', 'Vitamin D: 0.312mcg', 'Folate: 125.3mcg', 'Folic Acid: 0mcg']
      },
    ]
  },
  {
    id: randomId(),
    category_name: 'Healthy recipes for dinner',
    image: 'https://www.parents.com/thmb/s3WuRJfIuESkVH9hsGFQDG-LYiw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101457444-b6824098a18a4adfb06158682567a50f.jpg',
    list: [
      {
        id: randomId(),
        name: 'Stuffed Acorn Squash',
        image: 'https://www.parents.com/thmb/s3WuRJfIuESkVH9hsGFQDG-LYiw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101457444-b6824098a18a4adfb06158682567a50f.jpg',
        decription: ' Cut one medium acorn squash in half horizontally; remove seeds. Place on a baking sheet sprayed with cooking spray, cut side down. Bake at 375 F for 45 minutes or until tender. \n While squash is cooking, sauté 1/2 cup chopped onion, 1/2 cup chopped mushroom, 1/3 cup white beans, and one clove of chopped garlic in 2 teaspoons olive oil until soft, about 3–5 minutes. \n Add 1 cup cooked wild or brown rice and 1 tablespoon chopped pistachios to the mixture and continue to stir until heated through, about 1 minute more.Set aside. \n Remove squash from the oven, stuff each half with the rice and bean mixture, then top each half with 2 tablespoons of Parmesan cheese.Place in the oven again and cook for an additional 10 minutes.',
        nutrition: ['Calories: 641.7', 'Protein: 23.6g', 'Carbohydrate: 110.2g', 'Dietary Fiber: 16.2g', 'Total Sugars: 6.101g', 'Total Fat: 16.5g', 'Saturated Fat: 3.59g', 'Cholesterol: 6.8mg', 'Total Omega-3 FA: .438g', 'Calcium: 362.5mg', 'Iron: 7.457mg', 'Sodium: 763.8mg', 'Vitamin C: 55.4mg', 'Folate: 198.2mcg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: 'Parmesan Chicken Tenders with Marinara Dipping Sauce',
        image: 'https://www.parents.com/thmb/qAZt8WbNhO1S_EQB_FgcUytZvx0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101525958-6869de20f3b6488bb21344377dbcc4ea.jpg',
        decription: 'When you\'re pregnant, doctors recommend at least 60 grams of protein each day, which shouldn\'t be a problem with a meal like this—it\'s packed with more than 50 grams! \n To make this pregnancy recipe, preheat the oven to 475 F.Bread 5 ounces of chicken tenders by dipping in an egg wash made with two egg whites lightly beaten with a fork, then in 2 tablespoons bread crumbs(preferably whole wheat) mixed with 1 tablespoon parmesan cheese, 1/2 teaspoon oregano, 1/4 teaspoon dry mustard, and 1/4 teaspoon garlic powder. Bake chicken tenders on a wire rack or baking sheet sprayed with cooking spray for 15 minutes or until chicken is cooked to 165 F internally.Serve with 4.5 ounces baked Alexia sweet potato fries(about 18 fries) and 1 cup steamed broccoli drizzled with 1 teaspoon olive oil and a squeeze of lemon juice.',
        nutrition: ['Calories: 649.2', 'Protein: 50.9g', 'Carbohydrate: 69.6g', 'Dietary Fiber: 10.7g', 'Total Sugars: 19.7g', 'Total Fat: 22.8g', 'Saturated Fat: 4.002g', 'Cholesterol: 92.5mg', 'Total Omega-3 FA: 0.222g', 'Calcium: 231.4mg', 'Iron: 3.678mg', 'Sodium: 1171mg', 'Vitamin C: 68.1mg', 'Folate: 86.5mcg', 'Folic Acid: 11.1mcg']
      },
      {
        id: randomId(),
        name: 'Pork and Pineapple Kebobs',
        image: 'https://www.parents.com/thmb/4D-cLehEwtnRD6i4w-A2D3U2w0I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101097148-91263984a26b4a48891b177c676b64a3.jpg',
        decription: 'Throw some of these kebobs on the grill for a healthier alternative to standard BBQ fare. \n First, cut 4 ounces of pork tenderloin or boneless top loin roast into 1.5-inch pieces.In a plastic baggie, add the juice of half a lime, a half clove of chopped garlic, 1/4 cup juice from pineapple canned in its juices, and 1 teaspoon olive oil. Let marinate for about 30 minutes. \n Next, cut half of the medium red bell pepper and one- fourth of a medium onion into 1 - inch pieces.Thread pork, pepper, onion, and 1 / 2 cup canned pineapple chunks onto two skewers.Grill on a medium - high flame until pork is cooked to an internal temperature of 145 F. \n Serve over 1.5 cups cooked bulgur wheat tossed with 2 teaspoons olive oil, 1/8 teaspoon salt, and pepper to taste. ',
        nutrition: ['Calories: 640.6', 'Protein: 35.6g', 'Carbohydrate: 86.8g', 'Dietary Fiber: 15.2g', 'Total Sugars: 28.6g', 'Total Fat: 19.2g', 'Saturated Fat: 3.429g', 'Cholesterol: 71.4mg', 'Total Omega-3 FA: 0.187g', 'Calcium: 75.1mg', 'Iron: 4.212mg', 'Sodium: 366.8mg', 'Vitamin C: 103.2mg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: 'Pizza and Salad',
        image: 'https://www.parents.com/thmb/0HnXrXXUD-sHkFXKQeUTPNYJwSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101234886-6ae096852a4e421f805991b0aa1daae6.jpg',
        decription: ' You\'ve probably heard that you need more iron during pregnancy, but did you know that pizza can be a great place to find it? \n Heat an Amy\'s Organic Single Serve Pesto Pizza according to instructions. Serve with a salad made with 1 cup mixed greens, half of a sliced cucumber, 1 cup halved grape tomatoes, 1/2 cup canned chickpeas (rinsed and drained), 2 teaspoons olive oil, 2 teaspoons red wine vinegar, and garlic powder to taste. ',
        nutrition: ['Calories: 640.4', 'Protein: 21.1g', 'Carbohydrate: 85.1g', 'Dietary Fiber: 13.6g', 'Total Sugars: 9.939g', 'Total Fat: 24.1g', 'Saturated Fat: 5.74g', 'Cholesterol: 15mg', 'Total Omega-3 FA: 0.087g', 'Calcium: 316mg', 'Iron: 8.733mg', 'Sodium: 1059mg', 'Vitamin C: 31.9mg', 'Folate: 92.3mcg']
      },
      {
        id: randomId(),
        name: 'Healthier Nachos ',
        image: 'https://www.parents.com/thmb/_e-ASkq5CA9N06a3OGRMQ26UZW8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101487921-b552f927fe6348929bb925ad6b101d7a.jpg',
        decription: 'Reduced-fat cheese and nonfat yogurt turn a these nachoes into a calcium-rich dinner for pregnancy. \n Layer 1-ounce corn chips with 1 / 3 cup kidney beans, 2 tablespoons chopped olives, and 1/4 cup shredded reduced-fat cheese. Bake in oven or toaster oven for about 10 minutes or until all ingredients are hot and cheese is melted. \n Top with 1 / 2 cup shredded lettuce, 1/4 cup chopped tomatoes, 1/3 cup salsa, and 1/2 cup nonfat Greek yogurt. ',
        nutrition: ['Calories: 656.8', 'Protein: 36.9g', 'Carbohydrate: 70.4g', 'Dietary Fiber: 11.9g', 'Total Sugars: 9.806g', 'Total Fat: 29g', 'Saturated Fat: 7.082g', 'Cholesterol: 30mg', 'Total Omega-3 FA: 0.44g', 'Calcium: 712.1mg', 'Iron: 4.461mg', 'Sodium: 1517mg', 'Vitamin C: 9.557mg', 'Folate: 140.6mcg', 'Folic Acid: 0mcg']
      },
      {
        id: randomId(),
        name: 'Healthier Nachos ',
        image: 'https://www.parents.com/thmb/_e-ASkq5CA9N06a3OGRMQ26UZW8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/550_101487921-b552f927fe6348929bb925ad6b101d7a.jpg',
        decription: 'Reduced-fat cheese and nonfat yogurt turn a these nachoes into a calcium-rich dinner for pregnancy. \n Layer 1-ounce corn chips with 1 / 3 cup kidney beans, 2 tablespoons chopped olives, and 1/4 cup shredded reduced-fat cheese. Bake in oven or toaster oven for about 10 minutes or until all ingredients are hot and cheese is melted. \n Top with 1 / 2 cup shredded lettuce, 1/4 cup chopped tomatoes, 1/3 cup salsa, and 1/2 cup nonfat Greek yogurt. ',
        nutrition: ['Calories: 656.8', 'Protein: 36.9g', 'Carbohydrate: 70.4g', 'Dietary Fiber: 11.9g', 'Total Sugars: 9.806g', 'Total Fat: 29g', 'Saturated Fat: 7.082g', 'Cholesterol: 30mg', 'Total Omega-3 FA: 0.44g', 'Calcium: 712.1mg', 'Iron: 4.461mg', 'Sodium: 1517mg', 'Vitamin C: 9.557mg', 'Folate: 140.6mcg', 'Folic Acid: 0mcg']
      },
    ]
  },
  {
    id: randomId(),
    category_name: 'Healthy recipes for mamas with high blood pressure',
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F02%2F22%2F7748790.jpg',
    list: [
      {
        id: randomId(),
        name: 'Sheet-Pan Chili-Lime Salmon with Potatoes & Peppers',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F02%2F22%2F7748790.jpg',
        decription: " Step 1 Preheat oven to 425 degrees F.Coat a large rimmed baking sheet with cooking spray. Step 2 Toss potatoes, 1 tablespoon oil, 1/4 teaspoon salt and pepper together in a medium bowl. Transfer to the prepared pan and roast for 15 minutes. Step 3 Meanwhile, combine chili powder, cumin, garlic powder, lime zest and the remaining 1/2 teaspoon salt in a small bowl. Place bell peppers in the medium bowl and add the remaining 1 tablespoon oil and 1/2 tablespoon of the spice mixture; toss well to coat.Coat the salmon with the remaining spice mixture. Step 4 After 15 minutes, remove the pan from the oven.Add the peppers and stir to combine.Roast for 5 minutes.Remove from the oven; move some of the vegetables over and add the salmon to the pan.Roast until the salmon is just cooked through, 6 to 8 minutes.Serve with lime wedges.",

        ingredients: ['1 pound Yukon Gold potatoes, cut into 3/4-inch pieces', '2 tablespoons extra-virgin olive oil, divided', '¾ teaspoon salt, divided', '¼ teaspoon ground pepper', '2 teaspoons chili powder', '1 teaspoon ground cumin', '1 teaspoon ground cumin', '1 lime, zested and quartered', '2 medium bell peppers, any color, sliced', '1 ¼ pounds center-cut salmon fillet, skinned, if desired, and cut into 4 portions']
      },
      {
        id: randomId(),
        name: 'Chickpea & Quinoa Grain Bowl',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26232311%2F4548023.jpg',
        decription: " Step 1 Arrange quinoa, chickpeas, cucumbers, tomatoes and avocado in a wide bowl. Step 2 Stir hummus, roasted red pepper, lemon juice and water in a bowl.Add more water to reach desired consistency for dressing.Add parsley, salt and pepper and stir to combine.Serve with the Buddha bowl.",

        ingredients: ['1 cup cooked quinoa', '⅓ cup canned chickpeas, rinsed and drained', '½ cup cucumber slices', '½ cup cherry tomatoes, halved', '¼ avocado, diced', '3 tablespoons hummus', '1 tablespoon finely chopped roasted red pepper', '1 tablespoon lemon juice', '1 tablespoon water, plus more if desired', '1 teaspoon chopped fresh parsley (Optional)', 'Pinch of salt', 'Pinch of ground pepper']
      },
      {
        id: randomId(),
        name: 'Roasted Vegetable & Black Bean Tacos',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26230700%2F4499626.jpg',
        decription: "Step 1 Combine roasted root vegetables, beans, oil, cumin, chili powder, coriander, salt and pepper in a saucepan.Cover and cook over medium- low heat until heated through, 6 to 8 minutes. Step 2 Divide the mixture among the tortillas.Top with avocado.Serve with lime wedges.Garnish with cilantro and/ or salsa, if desired. ",

        ingredients: ['1 cup roasted root vegetables (see associated recipe)', '½ cup cooked or canned black beans, rinsed', '2 teaspoons extra-virgin olive oil', '1 teaspoon ground cumin', '1 teaspoon chili powder', '½ teaspoon ground coriander', '¼ teaspoon kosher salt', '¼ teaspoon ground pepper', '4 corn tortillas, lightly toasted or warmed', '½ avocado, cut into 8 slices', '1 lime, cut into wedges', 'Chopped fresh cilantro & salsa for garnish']
      },
      {
        id: randomId(),
        name: 'Mixed Greens with Lentils & Sliced Apple',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26230712%2F4548014.jpg',
        decription: " Step 1 Top greens with lentils, about half the apple slices and the feta.Drizzle with vinegar and oil.Serve with the remaining apple slices on the side.",

        ingredients: ['1½ cups mixed salad greens', '½ cup cooked lentils', '1 apple, cored and sliced, divided', '1 ½ tablespoons crumbled feta cheese', '1 tablespoon red-wine vinegar', '2 teaspoons extra-virgin olive oil']
      },
      {
        id: randomId(),
        name: 'Herby Fish with Wilted Greens & Mushrooms',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F06%2F7801648.jpg',
        decription: 'Step 1 Heat 1 Tbsp.oil in a large saucepan over medium heat.Add onion; cook, stirring occasionally, until translucent, 3 to 4 minutes.Add mushrooms and garlic; cook, stirring occasionally, until the mushrooms release their liquid and begin to brown, 4 to 6 minutes.Add kale, tomato, and 1 tsp.herb mix.Cook, stirring occasionally, until the kale is wilted and the mushrooms are tender, 5 to 7 minutes.Stir in lemon juice and 1/4 tsp. each salt and pepper. Remove from heat, cover, and keep warm. Step 2 Sprinkle fish with the remaining 1 tsp.herb mix and 1/4 tsp. each salt and pepper. Heat the remaining 2 Tbsp. oil in a large nonstick skillet over medium-high heat. Add the fish and cook until the flesh is opaque, 2 to 4 minutes per side, depending on thickness. Transfer the fish to 4 plates or a serving platter. Top and surround the fish with the vegetables; sprinkle with parsley, if desired.',
        ingredients: ['3 tablespoons olive oil, divided', '½ large sweet onion, sliced', '3 cups sliced cremini mushrooms', '2 cloves garlic, sliced', '4 cups chopped kale', '1 medium tomato, diced', '2 teaspoons Mediterranean Herb Mix (see Associated Recipes), divided', '1 tablespoon lemon juice', '½ teaspoon salt, divided', '½ teaspoon ground pepper, divided', '4 (4 ounce) cod, sole, or tilapia fillets', 'Chopped fresh parsley, for garnish']
      }
    ]
  }

]