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
    list: [
      {
        id: randomId(),
        name: "Pregnancy meditation with pregnancy affirmations",
        link: "https://youtu.be/d7TC9w2xr_g",
        image: '/images/meditation3.jpg'
      },
      {
        id: randomId(),
        name: "Prenatal bedtime yoga",
        link: 'https://youtu.be/efm89ipV6Kc',
        image: '/images/meditation4.jpg'
      },
      {
        id: randomId(),
        name: "calming and breathing yoga",
        link: 'https://youtu.be/L9kxAaQs-b4',
        image: '/images/meditation5.jpg'
      }
    ]
  },
  {
    id: randomId(),
    meditation_name: 'relaxation music',
    list: [
      {
        id: randomId(),
        name: 'Music to make baby move',
        link: 'https://youtu.be/uks3mGAOfsc',
        image: '/images/meditation6.jpg'
      },
      {
        id: randomId(),
        name: 'music for unborn\'s brain development ',
        link: 'https://youtu.be/L0zS7RLURlw',
        image: '/images/meditation7.jpg'
      },
      {
        id: randomId(),
        name: 'peaceful and soothing music for mother to be',
        link: 'https://youtu.be/lpRqLh6IGN4',
        image: '/images/meditation8.jpg'
      }
    ]
  },
  {
    id: randomId(),
    meditation_name: 'Fear clearing',
    list: [
      {
        id: randomId(),
        name: 'fear clearing affirmation meditation',
        link: 'https://youtu.be/8h7wr27yAM8',
        image: '/images/meditation9.jpg'
      },
      {
        id: randomId(),
        name: 'Manange your fears',
        link: 'https://youtu.be/U4JIuMYLQU0',
        image: '/images/meditation10.jpg'
      }
    ]
  },
  {
    id: randomId(),
    meditation_name: 'Mindfulness',
    list: [
      {
        id: randomId(),
        name: 'practicing mindfulness during pregnancy ',
        link: 'https://youtu.be/p1Ptn7n6bok',
        image: '/images/meditation2.jpg'
      },
      {
        id: randomId(),
        name: 'connect to your baby in the womb',
        link: 'https://youtu.be/aEqbw1zN_CE',
        image: '/images/meditation11.jpg'
      }
    ]
  }
]