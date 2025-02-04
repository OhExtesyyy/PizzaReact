import { useState } from 'react';

function Categories({value, onClickCategory}) {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  
  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, indx) => (
          <li
            key={indx}
            onClick={() => onClickCategory(indx)}
            className={value === indx ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
