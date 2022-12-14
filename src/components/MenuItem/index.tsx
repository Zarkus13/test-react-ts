import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { MenuItemLink } from './styles';

interface Props {
  label: string,
  path: string
}

const MenuItem: React.FC<Props> = ({ label, path }) => {
  const match = useMatch(path);

  return (
    <li>
      <MenuItemLink
        to={path}
        active={!!match}
      >
        {label}
      </MenuItemLink>
    </li>
  );
};

export default MenuItem;