import { CgDarkMode } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = ({ isDark, toggleTheme, toggleMenu, showMenu }) => {
  return (
    <header className="shadow p-5 font-poppins sticky top-0 backdrop-blur z-50">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl px-6 md:px-16 lg:px-36">
        <Link to="/" className="font-extrabold text-lg">
          Shobhit Nautiyal
        </Link>
        <button
          className="text-2xl md:hidden transition-transform duration-300"
          onClick={toggleMenu}
          style={{ transform: showMenu ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <CgMenuMotion />
        </button>
        <ul
          className={`flex-col md:flex-row md:flex md:items-center transition-all duration-300 ease-in-out ${
            showMenu ? "flex" : "hidden"
          } absolute top-16 left-0 right-0 ${
            isDark ? "bg-slate-800 text-slate-50" : "bg-slate-50 text-slate-800"
          }  md:bg-transparent p-10 md:p-0 md:relative md:top-0 md:left-0 md:right-auto md:w-auto md:h-auto w-full h-screen items-end`}
        >
          <button
            className="px-2 py-1 text-xl mb-4 md:mb-0"
            onClick={toggleTheme}
          >
            <CgDarkMode />
          </button>
          <li className="px-2 py-1 font-medium transition duration-300 ease-in-out hover:underline text-2xl md:text-base mb-4 md:mb-0">
            <Link to="/blog" onClick={toggleMenu}>
              blog
            </Link>
          </li>
          <li className="px-2 py-1 font-medium transition duration-300 ease-in-out hover:underline text-2xl md:text-base mb-4 md:mb-0">
            <Link to="/wallpaper" onClick={toggleMenu}>
              wallpaper
            </Link>
          </li>
          <li className="px-2 py-1 font-medium transition duration-300 ease-in-out hover:underline text-2xl md:text-base mb-4 md:mb-0">
            <Link to="/project" onClick={toggleMenu}>
              project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
