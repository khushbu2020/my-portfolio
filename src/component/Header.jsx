import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div>
      <header className="text-white body-font bg-slate-500">
        <div className="container mx-auto flex  flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={1000}
            className="flex title-font cursor-pointer items-center font-medium items-cent mb-4 md:mb-0"
          >
            <img
              src="./port.jpg"
              className="w-10 h-10 cursor-none text-white rounded-full"
              alt="portfolio-icon"
            />
            <span className="ml-3 text-xl cursor-pointer">Portfolio</span>
          </Link>
          <nav className="md:ml-auto cursor-pointer md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              className="mr-5 hover:underline underline-offset-8 ..."
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              className="mr-5 hover:underline underline-offset-8 ..."
            >
              About
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              duration={1000}
              className="mr-5 hover:underline underline-offset-8 ..."
            >
              Skill
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1000}
              className="mr-5 hover:underline underline-offset-8 ..."
            >
              Projects
            </Link>
            {/* <Link
              to="my-clients"
              spy={true}
              smooth={true}
              duration={1000}
              className="mr-5 hover:underline underline-offset-8 ..."
            >
              Clients
            </Link> */}
          </nav>
          <Link
            to="contact-me"
            spy={true}
            smooth={true}
            duration={1000}
            className="inline-flex items-center border py-2 px-3 focus:outline-none hover:bg-slate-700 rounded text-base mt-4 md:mt-0"
          >
            <i className="fa-regular fa-message"></i>
            <span className="mx-3 cursor-pointer">Contact Me</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
