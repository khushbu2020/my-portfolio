import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <section className="text-gray-600 bg-slate-300 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl cursor-pointer text-2xl font-medium title-font mb-4 text-gray-900">
        <u>THE PROJECTS</u>
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      I've utilized HTML, CSS, Bootstrap, JavaScript, React.js, Redux, and Tailwind CSS to build a variety of projects, spanning from responsive websites with Bootstrap and Tailwind CSS to dynamic web applications with React.js and Redux. Additionally, I've crafted custom-styled interfaces using HTML, CSS, and JavaScript. These projects underscore my commitment to user-friendly experiences and staying current with the latest technologies and best practices in web development.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full rounded-2xl h-full object-cover object-center"
            src="./calculator.png"
          />
         <div className="px-8 py-10 relative z-10 w-full border-4 rounded-2xl bg-black border-gray-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-200 mb-3">
            CALCULATOR
            </h1>
            <p className="leading-relaxed text-white">
            I've designed and developed a fully functional calculator using HTML, CSS, and JavaScript, showcasing my proficiency in frontend web development.
            </p>
            <button className=' btn w-32 mt-3 p-2 text-white border rounded mx-3'> <a href="https://github.com/khushbu2020/Calculator" target='_blank'>Github Code</a></button>
            <button className='btn text-white border mx-3 rounded w-32 p-2 mt-3'> <a href="https://khushbu2020.github.io/Calculator/" target='_blank'>Live Demo</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full rounded-2xl h-full object-cover object-center"
            src="./todolist.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 bg-white rounded-2xl border-gray-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-black mb-3">
            TO DO LIST
            </h1>
            <p className="leading-relaxed text-black">
            I created a to-do list app with React.js, optimizing task rendering using the map function, demonstrating my frontend development skills
            </p>
           
            <button className='btn text-black border border-black mx-3 rounded w-32 p-2 mt-3'><a href="https://github.com/khushbu2020/To-Do-List" target='_blank'>Github Code</a></button>
            <button className='btn text-black border border-black mx-3 rounded w-32 p-2 mt-3'> <a href=" https://khushbu2020.github.io/To-Do-List/" target='_blank'>Live Demo</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full rounded-2xl h-full object-cover object-center"
            src="./rock2.jpg"
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 rounded-2xl bg-black border-gray-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-200 mb-3">
            Rock Paper Scissors Game
            </h1>
            <p className="leading-relaxed text-white">
            I'm developing a Rock Paper Scissors game using HTML, CSS, and JavaScript, showcasing my frontend development skills and interactive design abilities.
            </p>
            <button className=' btn w-32 mt-3 p-2 text-white border rounded mx-3'> <a href="https://github.com/khushbu2020/Rock-Paper-Scissors" target='_blank'>Github Code</a></button>
            <button className='btn text-white border mx-3 rounded w-32 p-2 mt-3'> <a href="https://khushbu2020.github.io/Rock-Paper-Scissors/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
      </div>
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full rounded-2xl h-full object-cover object-center"
            src="./newsapp.png"
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 rounded-2xl bg-black border-gray-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-200 mb-3">
            News App
            </h1>
            <p className="leading-relaxed text-white">
            I've built a dynamic news application using React.js and APIs, demonstrating my ability to create engaging and data-driven web applications.
            </p>
            <button className=' btn w-32 mt-3 p-2 text-white border rounded mx-3'>Github</button>
            <button className='btn text-white border mx-3 rounded w-32 p-2 mt-3'>Live Demo</button>
          </div>
        </div>
      </div> */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full rounded-2xl h-full object-cover object-center"
            src="./textutility.png"
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 rounded-2xl bg-white border-gray-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-black mb-3">
            TextUtility 
            </h1>
            <p className="leading-relaxed text-black">
            Creating a React.js-based text utility site, empowering users to modify text cases, remove spaces, copy paragraphs, and personalize color themes, showcasing my diverse frontend development expertise.
            </p>
            <button className='btn text-black border border-black mx-3 rounded w-32 p-2 mt-3'> <a href="https://github.com/khushbu2020/TextUtility" target='_blank'>Github Code</a></button>
            <button className='btn text-black border border-black mx-3 rounded w-32 p-2 mt-3'> <a href=" https://khushbu2020.github.io/TextUtility/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full rounded-2xl h-full object-cover object-center"
            src="./addtocart.jpg"
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 rounded-2xl bg-black border-gray-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-200 mb-3">
            My_Cart
            </h1>
            <p className="leading-relaxed text-white">
            I'm building an e-commerce platform with the React Redux Toolkit, streamlining product management and enabling smooth cart operations, showcasing my expertise in React.js and Redux state management.
            </p>
            <button className=' btn w-32 mt-3 p-2 text-white border rounded mx-3'> <a href="https://github.com/khushbu2020/Product-shop" target='_blank'>Github Code</a></button>
            <button className='btn text-white border mx-3 rounded w-32 p-2 mt-3'> <a href="https://khushbu2020.github.io/Product-shop/"target='_blank'>Live Demo</a></button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full rounded-2xl h-full object-cover object-center"
            src="./amazonclone.jpg"
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 rounded-2xl bg-white border-gray-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-black mb-3">
            Amazom clone
            </h1>
            <p className="leading-relaxed text-black">
            I've replicated the Amazon interface using HTML, CSS, and Bootstrap classes, showcasing my ability to design and style complex layouts with responsive design principles.
            </p>
            <button className='btn text-black border border-black mx-3 rounded w-32 p-2 mt-3'><a href="https://github.com/khushbu2020/Amazon-clone" target='_blank'>Github Code</a></button>
            <button className='btn text-black border border-black mx-3 rounded w-32 p-2 mt-3'> <a href="https://khushbu2020.github.io/Amazon-clone/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  );
}

export default Portfolio;
