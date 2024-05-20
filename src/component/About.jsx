import React from 'react';


const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg flex content-center justify-center lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover  object-center h-72 w-96 rounded"
        alt="hero"
        src="./p2.jpeg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 cursor-pointer font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-8 text-justify leading-relaxed">
      I love building websites! I know HTML, CSS, and JavaScript well, and I'm really good at making interactive things with React and Redux. I enjoy working with others to create user-friendly websites and always keep learning about new web stuff!
      </p>
     
    
      <div className="flex lg:flex-row md:flex-row">
       
        <button className="bg-slate-300 text-black inline-flex py-3 px-5 rounded-full items-center lg:ml-4 md:mr-4 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
       <a href="https://github.com/khushbu2020" target='_blank' >
        <i className="fa-brands fa-github text-2xl" style={{color:"#171515"}}></i>
        </a>
        </button>
        
        <button className="bg-slate-300 text-black inline-flex py-3 px-5 rounded-full items-center lg:ml-4 md:mr-4 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
        <a href="https://www.linkedin.com/in/khushbu-kothari-245968277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
        <i className="fa-brands fa-linkedin text-2xl" style={{color:"#0077B5"}}></i>
        </a>  
       
        </button>
        <button className="bg-slate-300 text-black inline-flex py-3 px-5 rounded-full items-center lg:ml-4 md:mr-4 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          
          <a href="mailto:khushburkothari@gmail.com" target='_blank'>
          <i className="fa-regular fa-envelope text-2xl" style={{color:"#c71610"}}></i>
          </a>
        
        </button>
       
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default About;
