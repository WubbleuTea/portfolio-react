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
    <nav className='space-around'>
      <ul className="flex-row ">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume</a>     
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;