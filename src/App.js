import { useState } from "react";
import Header from "./components/Header";

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
    </div>
  );
};

export default App;
