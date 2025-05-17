import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // for scrolling inside the page
import { Link as RouterLink } from "react-router-dom"; // for page navigation
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  // Hardcoded navbar links
  const links = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "About Us", link: "about" },
    { id: 3, title: "Services", link: "services" },
    { id: 4, title: "Team Reservation", link: "team" },
  ];

  return (
    <nav>
      <div className="logo">Mezbaan Culinary</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {links.map((element) => (
            <ScrollLink
              to={element.link}
              key={element.id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setShow(false)} // close menu on click
            >
              {element.title}
            </ScrollLink>
          ))}
        </div>

        {/* OUR MENU button */}
        <RouterLink
          to="/menu"
          className="menuBtn"
          onClick={() => setShow(false)}
        >
          OUR MENU
        </RouterLink>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
