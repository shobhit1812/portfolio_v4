import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className=" py-5 font-poppins flex justify-between items-center mx-auto max-w-screen-xl px-6 md:px-16 lg:px-36">
      <h1 className="font-extrabold text-lg">
        Shobhit Nautiyal &copy; {currentYear}
      </h1>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Shobhit1812"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="mailto:shobhit.nautiyal99@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.linkedin.com/in/shobhit-nautiyal-033b711ba/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/shobhitnautiya_"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://instagram.com/imshobhitnautiyal"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://medium.com/@shobhit.nautiyal99"
          target="_blank"
          rel="noreferrer"
        >
          <FaMedium />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
