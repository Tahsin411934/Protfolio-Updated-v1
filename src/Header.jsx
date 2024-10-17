import { Link } from "react-scroll";


const Header = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 justify-center text-white">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
