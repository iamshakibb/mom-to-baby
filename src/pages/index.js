import Layout from "../components/Layout/Layout";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { randomId } from "../utils/randomId";
import { BsCloudHaze1 } from "react-icons/bs";

export default function Home() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: true,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: false
  };
  return (
    <Layout className="!overflow-hidden">
      <Slider {...settings}>
        {
          list.map(l => (
            <SliderCom
              key={l.id}
              title={l.title}
              btnLink={l.btnLink}
              imgURL={l.imgURL}
              btnText={l.btnText}
              imgAlt={l.imgAlt}
              decription={l.description}
            />
          ))
        }
      </Slider>
      <div className="h-[20px]"></div>
    </Layout>
  )
}


const SliderCom = ({ title, btnText, btnLink, imgURL, imgAlt, decription }) => {
  return (
    <div className="w-full h-[90vh]">
      <div className="container grid items-center justify-center w-full h-full grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className={`${decription ? `mb-3` : `mb-10`} text-3xl`}>
            {title}
          </h1>
          {decription && <p className="mb-10 text-base">{decription}</p>}
          <Link href={btnLink}>
            <a>
              <button className="bg-[#d4f4f6] w-[200px] h-[50px] rounded-md text-black font-semibold">
                {btnText}
              </button>
            </a>
          </Link>
        </div>
        <div className="w-full h-[300px] row-[1] lg:col-[2/-1]  flex justify-center lg:h-[500px] md:h-[300px]">
          <div className="lg:w-[500px] lg:h-[500px] h-[300px] w-[300px] md:h-[300px] md:w-[300px] absolute">
            <Image
              className="rounded-full"
              src={imgURL}
              layout="fill"
              alt={imgAlt}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const list = [
  {
    id: randomId(),
    title: 'Welcome to the Mom To Baby',
    description: 'Healthy and happy pregnancy!',
    btnLink: "/bmi-calculator",
    imgURL: "/images/welcome.png",
    btnText: "Let's calculate",
    imgAlt: 'weight gain calculator'
  },
  {
    id: randomId(),
    title: "Weight Gain Calculator",
    btnLink: "/bmi-calculator",
    imgURL: "/images/BMI-calculator.jpg",
    btnText: "Let's calculate",
    imgAlt: 'weight gain calculator'
  },
  {
    id: randomId(),
    title: "Recipes",
    btnLink: "/recipes",
    imgURL: "/images/recipes.jpg",
    btnText: "Let's get recipes",
    imgAlt: 'Food recipes'
  },
  {
    id: randomId(),
    title: "We have lots of food suggestion for you",
    btnLink: "/suggested-food",
    imgURL: "/images/food.jpg",
    btnText: "Let's see",
    imgAlt: 'Suggested Food'
  },
  {
    id: randomId(),
    title: 'Meditation',
    btnLink: "/meditation",
    imgURL: "/images/meditation.jpg",
    btnText: "Let's see",
    imgAlt: 'Meditation'
  }
]