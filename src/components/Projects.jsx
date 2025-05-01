import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import { useState } from "react";
import {
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiWordpress,
  SiCplusplus,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiFastapi,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Projects = () => {
  const workData = [
    {
      title: "Web Projects",
      info: [
        {
          title: "Chillbase",
          img: "/chillbase.png",
          url: "https://chillbase.onrender.com/listings",
        },
        {
          title: "Aurality",
          img: "/aurality.png",
          url: "https://aurality-music-app27.netlify.app/",
        },
        
        {
          title: "React Chatbot",
          img: "/chatbot.png",
          url: "https://geminiclone-prodip27.netlify.app/",
        },
        {
          title: "Task-Manager",
          img: "/todo.png",
          url: "https://prodip27taskmanagementapp.netlify.app/",
        },
      
      ],
    },
    // {
    //   title: "GraphicDesign",
    //   info: [
    //     {
    //       title: "E-sport Poster",
    //       img: "/esport.png",
    //       url: "https://www.behance.net/prodipghosh",
    //     },
    //     {
    //       title: "Creative Thumbnail",
    //       img: "/thumbnail.png",
    //       url: "https://www.behance.net/prodipghosh",
    //     },
    //     {
    //       title: "Anime Banner",
    //       img: "/animebanner.png",
    //       url: "https://www.behance.net/prodipghosh",
    //     },
    //   ],
    // },
  ];

  const [index, setIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section id="project" className="space-y-20 container mx-auto">
      {/*section title */}
      <motion.div
        variants={fadeIn("scaleUp", 0.3, 1.2)}
        initial="hidden"
        whileInView="show"
        className="text-center"
      >
        <h1 className="h1">
          My Works <hr />
        </h1>
        <p className="p">Projects I've built</p>
      </motion.div>

      {/* content */}
      <div className="flex flex-col lg:flex-row gap-20 justify-around items-center relative">
        <div className="text-center">
          <p className="text-[30px] mb-5 font-semibold underline">Skills I have</p>
          <motion.p
            variants={fadeIn("scaleUp", 0.4, 1.5)}
            initial="hidden"
            whileInView="show"
            className="flex flex-wrap gap-5 text-3xl  cursor-pointer"
          >
            <SiHtml5 className="hover:text-orange-700 transition-all duration-300 ease-in" />
            <SiCss3 className="hover:text-blue-700 transition-all duration-300 ease-in" />
            <SiJavascript className="hover:text-yellow-500 transition-all duration-300 ease-in" />
            <SiMongodb className="hover:text-green-500 transition-all duration-300 ease-in"/>
            <SiExpress className="hover:text-slate-700 transition-all duration-300 ease-in" />
            <SiReact className="hover:text-blue-400 transition-all duration-300 ease-in" />
            <SiNodedotjs className="hover:text-green-700 transition-all duration-300 ease-in" />
            <SiTailwindcss className="hover:text-blue-800 transition-all duration-300 ease-in" />
            <SiBootstrap className="hover:text-purple-700 transition-all duration-300 ease-in" />
            <SiFastapi className="hover:text-green-500 transition-all duration-300 ease-in" />
            <SiPython className="hover:text-yellow-700 transition-all duration-300 ease-in" />
            <SiAdobephotoshop className="hover:text-blue-900 transition-all duration-300 ease-in" />
            {/* < className="hover:text-blue-800 transition-all duration-300 ease-in" /> */}
          </motion.p>
        </div>

        {/* projects data */}
        <div className="flex-1 flex flex-col items-center justify-center gap-5 w-full h-full max-w-[650px]">
          <div className="flex w-full items-center justify-between px-2">
            {workData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex && "text-value4 underline"
                } text-[30px] cursor-pointer transition-all duration-300 ease-in`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <motion.div
            variants={fadeIn("left", 0.3, 1.5)}
            initial="hidden"
            whileInView="show"
            className="shadow-md w-full bg-white/20 rounded-xl"
          >
            {workData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="transition-all duration-300 ease-in flex justify-between gap-5 text-center items-center py-2 px-4 relative"
              >
                <p className="text-xl font-[600] flex-1">{item.title}</p>
                <p className="text-xl font-[600] flex-1">
                  <button
                    onMouseEnter={() => setHoverIndex(itemIndex)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="hover:text-value5 transition-all duration-300 ease-in cursor-pointer"
                  >
                    Show ME
                  </button>
                  {hoverIndex === itemIndex && (
                    <div className="absolute w-[400px] h-[250px] top-[-260px] left-[50%] transform -translate-x-1/2 z-20 shadow-xl border-2 border-white">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </div>
                  )}
                </p>
                <p className="text-xl font-[600] flex-1">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-value5 transition-all duration-300 ease-in"
                  >
                    Checkout
                  </a>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
