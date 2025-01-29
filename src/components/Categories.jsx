import { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  function onClickCategory(index) {
    setActiveCategory(index);
  }

  return (
    <div className='categories'>
      <ul>
        {categories.map((value, indx) => (
          <li 
            key={indx} 
            onClick={() => onClickCategory(indx)} 
            className={activeCategory === indx ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
