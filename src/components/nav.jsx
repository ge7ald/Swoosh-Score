import { useState } from "react";
import { Link } from "react-router-dom";

function Nav( {numOfCartItems}) {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <nav className="flex justify-between z-50 items-center px-4 bg- navigation w-full sm:py-2 sm:px-10 rounded-full fixed sm:top-2 sm:left-1/2 transform sm:-translate-x-1/2 sm:w-11/12">
        <div className="flex gap-10 items-center justify-center">
          <span className=" md:flex hidden">
            <h1 className="text-3xl font-black">Swoosh</h1>
          </span>
          <span className="relative box-border">
            <input
              type="search"
              placeholder="Search"
              className="border-none lg:w-108 sm:w-72 rounded-full bg-surface px-4 py-2 sm:p-4 focus:outline-none focus:border-transparent"
            />
            <i className="bx bx-search absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary p-3 sm:p-5 rounded-full"></i>
          </span>
        </div>

        <ul className="hidden md:flex gap-3 text-text-muted text-lg font-semibold ">
          <li className="hover:text-text">
            <a href="">Home</a>
          </li>
          <li className="hover:text-text">
            <a href="">Shop</a>
          </li>
          <li className="hover:text-text">
            <a href="">Contact</a>
          </li>
        </ul>
        <div
          className="block md:hidden"
          onClick={() => setOpenNav(!openNav)}
        ></div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-11/12 md:hidden bg-primary rounded-full p-4 shadow-lg z-50">
        <ul className="flex justify-between items-center text-surface text-lg font-semibold">
          <Link to="/">
          <li className="flex-1 flex justify-center items-center hover:scale-110 transition-transform">
            <i className="bx bx-home text-2xl sm:text-3xl"></i>
          </li>
          </Link>
          <Link to="/cartSection">
            <li className="flex-1 flex justify-center">
              <div className="relative inline-flex">
                <i className="bx bx-cart text-[1.7rem] sm:text-3xl"></i>

                <span className="absolute -top-2 -right-2 bg-accent text-[10px] min-w-5 h-5 flex items-center justify-center rounded-full text-primary">
                  {numOfCartItems}
                </span>
              </div>
            </li>
          </Link>
          <Link to="/shop">
          <li className="flex-1 text-center hover:scale-110 transition-transform">
            <i className="bx bx-store text-2xl sm:text-3xl"></i>
          </li>
          </Link>

          <Link to="/cartSection">
          <li className="flex-1 text-center hover:scale-110 transition-transform">
            <i className="bx bx-envelope text-2xl sm:text-3xl"></i>
          </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
