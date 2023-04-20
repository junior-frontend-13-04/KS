import React, { useState } from "react";
import nav from "./Navbar.module.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const setNav = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", setNav);
  return (
    <>
      <div className={`${nav.navbar} ${navbar ? nav.active : navbar}`}>
        <div className={nav.container}>
          <div className={nav.right}>LOGO</div>
          <div className={nav.mid}>RENT</div>
          <div className={nav.left}>Sign Up</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
