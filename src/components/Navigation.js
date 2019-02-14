// React includes
import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
// import { Link } from 'react-router-dom';

const Header = styled(AppBar)`
  && {
    height: 3.125rem;
    line-height: 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: none;
    background: #f7f5f0;
    align-items: center;
  }
`;

const Title = styled.h1`
  display: inline-flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0;
  padding-left: 2rem;
  // align-items: center;
  color: black;
`;


const MenuNav = styled.nav`
  padding: 0 2rem;
  
`;

const MenuItem = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 1rem;

  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

class Menu extends React.Component {
  render() {
    return (
      <Header>
        <Title>
          <span>Louis's Place</span>
        </Title>
        <MenuNav>
          <MenuItem to='/'>Home</MenuItem>
          <MenuItem to='/'>Project</MenuItem>
          <MenuItem to='/'>About Louis</MenuItem>
        </MenuNav>
      </Header>
    );
  }
}

export default Menu;
