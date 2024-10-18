import { Button, Navbar } from 'flowbite-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import useTheme from './Hook/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme(); 
  return (
    <div className={`container mx-auto lg:w-[85%] p-3 border-b  border-gray-800 font-inter`}>
      
      <Navbar fluid rounded className={`${theme === 'light' ? 'bg-transparent' : 'bg-[#040615] text-gray-50'}`}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-bold font-Prata">
            A<span className="text-yellow-500 font-bold text-xl"> . </span>Fahim
          </span>
        </Navbar.Brand>
        <div className="flex gap-5 md:order-2">
          <Link to="/Contract">
          <Link to="/Contract">  <Button>Contact</Button></Link>
          </Link>

          <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
            <span className="relative">
              <input onClick={toggleTheme} id="Toggle2" type="checkbox" className="hidden peer" />
              <div className="w-10 h-4 rounded-full shadow-xl bg-slate-700 dark:bg-gray-400 peer-checked:dark:bg-violet-600"></div>
              <div
                className={`${
                  theme === 'light' ? 'bg-[#081927] text-gray-50' : 'bg-blue-100'
                } absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-600`}
              ></div>
            </span>
          </label>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className={`text-xl ${theme === 'light' ? 'text-gray-800' : 'text-gray-50'}`}>
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer">
            Skills
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer">
            Services
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">
            Projects
          </ScrollLink>
          <ScrollLink to="education" smooth={true} duration={500} className="cursor-pointer">
            Education
          </ScrollLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
