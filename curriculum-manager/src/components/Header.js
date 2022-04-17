import React from 'react';

import { HeaderStyle, LinkStyle } from '../styles/styles';

function Header() {
  return (
    <HeaderStyle>
      <h2>Gerenciador de Currículos</h2>
      <LinkStyle to="/">Principal</LinkStyle>
      <LinkStyle to="/add">Adicionar Currículo</LinkStyle>
    </HeaderStyle>
  );
}

export default Header;
