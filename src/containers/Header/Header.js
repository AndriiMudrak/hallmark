import React, { useCallback } from 'react';

import LogoImg from '../../public/Logo.svg';
import { MAIN_CATAGORIES, RIGHT_CATEGORIES } from '../../constants/header';
import { Wrapper } from './Header.style';

const Header = () => {

  const onCategoryClick = useCallback((category) => {
    console.log(category) //push to route
  }, [])

  return (
    <Wrapper>
      <div className="left">
        <div className="logo">
          <img src={LogoImg} alt="logo"/>
        </div>
        <div className="main">
          {MAIN_CATAGORIES.map(({ title, value }) => {
            return <span key={value} onClick={() => onCategoryClick(value)}>{title}</span>
          })}
        </div>
      </div>

      <div className="right">
        {RIGHT_CATEGORIES.map(({ title, value }) => {
          return <span key={value} onClick={() => onCategoryClick(value)}>{title}</span>
        })}
      </div>
    </Wrapper>
  );
}

export default Header;
