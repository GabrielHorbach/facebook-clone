import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';

import { Container, IconWrapper, Input } from './styles';

function LeftMenu() {
  const [search, setSearch] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearch(value);
  }

  return (
    <Container>
      <FacebookIcon />
      <IconWrapper>
        <FiSearch />
      </IconWrapper>
      <Input
        type="text"
        placeholder="Pesquisar no Facebook"
        value={search}
        onChange={handleChange}
      />
    </Container>
  )
}

export default LeftMenu;