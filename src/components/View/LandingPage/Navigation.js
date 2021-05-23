import React from 'react';
import Loading from '../../Loading';

import { useGlobalContext } from '../../context';

import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const { firstCategories, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='navigation'>
      <div className='navigation__wrap'>
        {firstCategories.map((category) => {
          if (category.displayed === true)
            return (
              <Link
                key={category.id}
                to={`/category/${category.firstCategory}`}
              >
                <div key={category.id} className='navigation__btn'>
                  <img
                    src={category.strIconSource[0].url}
                    alt={category.firstCategory}
                  />
                  <span>{category.firstCategory}</span>
                </div>
              </Link>
            );
        })}
      </div>
    </section>
  );
};

export default Navigation;
