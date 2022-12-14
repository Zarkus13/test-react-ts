import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuItemLinkProps {
  active: boolean
}

export const MenuItemLink = styled(Link)<MenuItemLinkProps>`
  ${(props) => props.active ? `
    font-size: 20px;
    color: red;
    padding-left: 20px;
  ` :
  `
    color: black;
    font-size: 16px;
  `}
`;