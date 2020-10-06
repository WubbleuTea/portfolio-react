import React from 'react';

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  return(
    <nav className=''>
      <ul className="flex-row ">
        {categories.map((category) => (
          <li 
            key={category.name}
            className={currentCategory.name === category.name}
          >
            <span onClick={() => {
              setCurrentCategory(category);
            }}
            >
            <button>
              {category.name}
            </button>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;