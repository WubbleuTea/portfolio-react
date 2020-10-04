import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   currentCategory,
  //   contactSelected,
  //   setContactSelected
  // } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return(
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Joshua Weisbrod-Torres
        </a>
      </h2>
      <ul>
        <li href="#about">
          About
        </li>
        <li href="#projects">
          Projects
        </li>
        <li href="#contact">
          Contact
        </li>
        <li href="#resume">
          Resume        
        </li>
      </ul>
    </header>
  );
}

export default Navigation;