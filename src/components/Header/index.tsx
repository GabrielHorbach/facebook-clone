import React from 'react';

import LeftMenu from './LeftMenu';
import MiddleMenu from './MiddleMenu';
import RightMenu from './RightMenu';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <LeftMenu />
      <MiddleMenu />
      <RightMenu />
    </Container>
  );
}

export default Header;
