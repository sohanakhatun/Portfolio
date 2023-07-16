import React from "react";
import RazorPay from "../assets/portfolio/razorpay.png";
import Ecomzy from '../assets/portfolio/ecomzy.png';
import FilmyVerse from '../assets/portfolio/filmyverse.png';
import ExpenseTracker from '../assets/portfolio/expensetracker.png';
import PasswordGenerator from '../assets/portfolio/passwordgenerator.png';
import TechBlogs from '../assets/portfolio/techblogs.png';
import WeatherApp from '../assets/portfolio/weatherapp.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ExpenseTracker,
      code: "https://github.com/sohanakhatun/Expense-tracker-Mern",
      demo: "https://jade-kind-gazelle.cyclic.app/",
    },

    {
      id: 2,
      src: FilmyVerse,
      code: "https://github.com/sohanakhatun/filmyverse",
      demo: "https://filmyverse-sk.vercel.app/",
    },
    {
      id: 3,
      src: Ecomzy,
      code: "https://github.com/sohanakhatun/E-Comzy",
      demo: "https://e-comzy.vercel.app/",
    },
    {
      id: 4,
      src: TechBlogs,
      code: "https://github.com/sohanakhatun/Tech-Blogs",
      demo: "https://tech-blogs-react-sk.netlify.app/",
    },
    {
      id: 5,
      src: PasswordGenerator,
      code: "https://github.com/sohanakhatun/Password_Generator",
      demo: "https://sohanakhatun.github.io/Password_Generator/",
    },
    {
      id: 6,
      src: WeatherApp,
      code: "https://github.com/sohanakhatun/weather-app",
      demo: "https://sohanakhatun.github.io/weather-app/",
    },
    {
      id: 7,
      src: RazorPay,
      code: "https://github.com/sohanakhatun/RazorPay-Clone",
      demo: "https://razorpayclone2023.netlify.app/",
    }

  ];

  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg pt-[150px] md:pt-[500px] p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src,demo,code }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={demo} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </a>
              <a href={code}target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
