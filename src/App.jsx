import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import axios from 'axios';

export default function App() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://679a6e91747b09cdcccedd30.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке данных:", err);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {items.map((obj, indx) => (
              <PizzaBlock key={indx} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
