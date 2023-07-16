import React from "react";
import AboutPic from '../assets/sohana.jpeg'
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="flex flex-col  md:flex-row gap-[25px]">
        <div className="w-[200px]  rounded-lg mt-4 md:w-[1740px] ">
          <img src={AboutPic}/>
        </div>
        <div className="text-xl md:mt-6 ">
          Hello! My name is Sohana Khatun, and I am an enthusiastic
          undergraduate student pursuing a degree in Electronics and
          Telecommunication Engineering  at VSSUT, Burla. As a passionate
          Web developer with an expertise in MERN Stack, I thrive on turning innovative
          ideas into tangible solutions. I am driven by a strong desire to
          collaborate and work in teams, as I believe that teamwork amplifies
          creativity and fosters growth. With a solid foundation in DSA and
          hands-on experience in web development, I am committed to leveraging
          my skills and knowledge to contribute meaningfully to the world of
          technology.
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
