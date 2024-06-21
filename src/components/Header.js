import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";

const Header = ({ value }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow p-5 font-poppins">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl px-6 md:px-16 lg:px-36">
        <a href="/" className="font-extrabold text-lg">
          Shobhit Nautiyal
        </a>
        <button
          className="text-lg md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <CgMenuMotion />
        </button>
        <ul
          className={`flex-col md:flex-row md:flex md:items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-16 left-0 right-0 bg-white md:bg-transparent p-5 md:p-0 md:relative md:top-0 md:left-0 md:right-auto md:w-auto md:h-auto w-full h-screen items-center justify-center`}
        >
          <button
            className="px-2 py-1 font-medium border rounded-full"
            onClick={value}
          >
            <CgDarkMode />
          </button>
          <li className="px-2 py-1 font-medium transition duration-300 ease-in-out hover:underline">
            <a href="#blog">blog</a>
          </li>
          <li className="px-2 py-1 font-medium transition duration-300 ease-in-out hover:underline">
            <a href="#wallpaper">wallpaper</a>
          </li>
          <li className="px-2 py-1 font-medium transition duration-300 ease-in-out hover:underline">
            <a href="#project">project</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
