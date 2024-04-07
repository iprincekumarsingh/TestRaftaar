import React from "react";
import aboutHome from "../../assets/aboutHome.png";
import logo from "../../assets/logo.png";

const Navbar = ({}) => {
  const NavItem = ({ text, link }) => {
    return (
      <li>
        <a href={link} className="text-white font-semibold hover:text-gray-300">
          {text}
        </a>
      </li>
    );
  };

  return (
    <>
      <nav
        className="relative bg-cover bg-center bg-no-repeat md:h-[720px] h-auto z-10 border-b border-gray-200 dark:border-gray-700"
        style={{
          backgroundImage: `url(${aboutHome})`,
        }}
      >
        <div className="px-4 sm:px-20 py-6 sm:py-10 flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-3">
            <img src={logo} className="h-10 sm:h-12" alt="Flowbite Logo" />
          </div>
          <button
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden md:block">
            <ul className="flex space-x-4 sm:space-x-8">
              <NavItem text="Home" link="#" />
              <NavItem text="About" link="#" />
              <NavItem text="Projects" link="#" />
              <NavItem text="Career" link="#" />
              <NavItem text="Product" link="#" />
              <NavItem text="Blog" link="#" />
            </ul>
          </div>
          <div className="hidden md:flex bg-[#1E5CAB] flex-col items-center justify-center text-center rounded-lg">
            <li className="list-none px-6 py-3 sm:px-10 sm:py-3 rounded-2xl">
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </div>
        </div>
        {/* Text centered vertically and horizontally */}
        <div className="flex w-full h-full items-center justify-center relative md:bottom-20">
          <div className="text-center px-4 sm:px-0">
            <h1 className="text-yellow-50 text-2xl sm:text-4xl font-bold mb-4">
              Years of empowering development <br /> through infrastructure
            </h1>
            <div className="text-center">
              <h2 className="text-yellow-50 text-sm sm:text-2xl font-normal whitespace-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus.<br /> Suspendisse lectus tortor, dignissim sit amet,
                adipiscing nec, e
              </h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
