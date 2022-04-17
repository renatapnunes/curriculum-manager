import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

import Home from '../pages/Home';
import data from './mock';

localStorage.setItem('curriculums', JSON.stringify([data]));

beforeEach(() => {
  const { history } = renderWithRouter(<Home />);
  history.push(`/view/${data.id}`);
});

describe('Testa a pagina Home.js', () => {
  it('Testa se os links do Header estão na tela', () => {
    expect(screen.getByText('Principal')).toBeInTheDocument();
    expect(screen.getByText('Adicionar Currículo')).toBeInTheDocument();
  });
  it('Testa se o nome do candidato está na tela', () => {
    expect(screen.getByText('Renata Nunes')).toBeInTheDocument();
  });
  it('Testa se ao clicar para voltar a página principal o redirecionamento acontece', () => {
    const linkHome = screen.getAllByText('Principal')[0];
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    expect(screen.getByText('Cadastrar currículo')).toBeInTheDocument();
  });
});
