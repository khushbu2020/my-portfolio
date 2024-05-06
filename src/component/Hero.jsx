import React,{useRef,useEffect} from 'react';
import Typed from 'typed.js';
import { Link } from 'react-scroll';

const Hero = () => {

    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['<i>Web</i> Developer', 'Frontend Developer','Backend Developer','<i>Web</i> Designer'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  

  return (
    <div>
      <section className="text-gray-600 bg-slate-300 body-font">
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hello It's Me
        <br className="hidden lg:inline-block" />
        <p className=' font-bold'>Khushbu Kothari</p> 
      I'm a <span className=' text-slate-600 font-bold' ref={el} />
      </h1>
      <p className="mb-8 leading-relaxed">
        I'm a web Designer with extensive experience for over 1 years.
        <br />expertise to create and website design, Frontend design, and many more... 
      </p>
      <div className="flex justify-center">
       
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
      {/* <a href="https://drive.google.com/file/d/1V38T9nLvmQIvShuF4Rx1kxSItfkXhjlX/view?usp=drivesdk" download={"khushbu_CV.pdf"} target='_balck' > */}
      <a href="./khushbuCV.pdf" download  >
              Download CV 
              </a> 
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
        <Link
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              className="mr-5 hover:text-gray-900"
            >
              More About Me
            </Link>
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full me-10 md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="./portfolio1.png"
      />
    </div>
  </div>
</section>

    </div>
  );
}

export default Hero;
