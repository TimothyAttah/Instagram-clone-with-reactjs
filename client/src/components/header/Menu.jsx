import React from 'react';
import { StyledMenu } from './styles/menu';
import { Link, useLocation } from 'react-router-dom';
import { navMenu } from '../helper/Helper';

const Menu = () => {
  const { pathname } = useLocation();

  const activeStyle = (pn) => {
    if (pn === pathname) return 'active';
  };
  return (
    <StyledMenu>
      <ul>
        {navMenu.map((item) => (
          <li key={item.label} className={`${activeStyle(item.path)}`}>
            <Link to={item.path}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu;
