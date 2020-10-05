import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return(
    <nav className='space-around'>
      <ul className="flex-row ">
        {categories.map((category) => (
          <li 
            key={category.name}
            className={currentCategory.name === category.name}
          >
            {currentCategory.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;