import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-green-900">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="hover:text-green-900">
        <NavLink to="/about">ABOUT</NavLink>
      </li>

      {/* <li className="hover:text-green-900">
        <NavLink to="/service">SERVICE</NavLink>
      </li> */}

      {/* <li className="hover:text-green-900">
      <NavLink to="/resume">RESUME</NavLink>
      </li> */}

      <li className="hover:text-green-900">
      <NavLink to="/projects">PROJECTS</NavLink>
      </li>
      <li className="hover:text-green-900">
      <NavLink to="/contact">CONTACT</NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar px-10 fixed z-10 bg-[#005522] bg-opacity-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
            id="sidebar"
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#191919] font-bold mt-3 z-[1] p-2 shadow rounded-box w-52 text-white"
            >
              {links}
            </ul>
          </div>
          <a href="/" className="text-3xl font-bold text-white">MARUF</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="sidebar" className="menu menu-horizontal font-bold px-1 text-white ">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="font-bold text-sm uppercase hidden md:block">
          <a href="tel:+8801703386612" className="hover:text-green-900">
            +880 17033 86612
          </a>
          <span className="mx-5">/</span>
          <a href="mailto:maimun78l@gmail.com" className="hover:text-green-900">
            maimun78l@gmail.com
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
