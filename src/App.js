import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Blog from "./components/Blog";
import Wallpaper from "./components/Wallpaper";
import Project from "./components/Project";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };
  return (
    <div
      className={`scroll-smooth ${
        isDark ? "bg-slate-800 text-slate-50" : "bg-slate-50 text-slate-800"
      }`}
    >
      <Header value={toggleTheme} />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/wallpaper",
        element: <Wallpaper />,
      },
    ],
  },
]);

export default appRouter;
