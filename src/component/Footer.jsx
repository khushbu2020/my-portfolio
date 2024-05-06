import React from "react";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div>
     
      <div className=" text-gray-600 mt-0 bg-slate-300">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className=" text-slate-900 text-sm text-center sm:text-left">
            Copyright &copy; portfolio. Made with <i className="fa-solid fa-heart text-red-600"></i> By Khushbu Kothari
           
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 me-7 sm:w-auto w-full sm:text-left text-center text-slate-900 text-sm">
            <button>
            <Link
              to="header"
              spy={true}
              smooth={true}
              duration={1000}
              className="mr-5 hover:text-gray-900"
            >
              <i className="fa-solid fa-circle-up text-2xl text-slate-600"></i>
            </Link>
              </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
