import { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";

// React Icons
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Navbar = () => {
  const navbarData = [
    {
      name: "Github",
      icon: <FaGithubAlt />,
      path: "https://github.com/prodipsen27",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/Prodipsen27",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      path: "https://www.instagram.com/zxpr27/",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[999] transition-all duration-500 ease-in ${
        isVisible
          ? "bg-primary/80 backdrop-blur-[6px] shadow-md shadow-primary/50 text-white"
          : "bg-transparent text-primary"
      }`}
    >
      <Sidebar />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-[100px] px-4">
        {/* Name */}
        <div className="text-center md:text-left font-bold text-2xl sm:text-3xl md:text-4xl w-full md:w-auto">
          Prodip Sengupta
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl mt-4 md:mt-0">
          {navbarData.map((item, index) => (
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex flex-col items-center group"
            >
              <span>{item.icon}</span>
              {/* Tooltip */}
              <div className="relative hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none">
                <span
                  className={`${
                    isVisible ? "bg-value5/50" : "bg-primary/10"
                  } absolute -bottom-[40px] -left-5 text-sm font-semibold leading-none px-2 py-1 rounded-full`}
                >
                  {item.name}
                </span>
                {/* Tooltip triangle */}
                <span
                  className={`${
                    isVisible ? "border-value5/50" : "border-l-primary/10"
                  } absolute -left-2 -rotate-90 border-solid border-l-8 border-y-transparent border-y-[6px] border-r-transparent border-r-8`}
                ></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
