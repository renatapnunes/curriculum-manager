import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

import Home from '../pages/Home';
import data from './mock';

localStorage.setItem('curriculums', JSON.stringify([data]));
beforeEach(() => renderWithRouter(<Home />));

describe('Testa a pagina Home.js', () => {
  it('Testa se os links do Header estão na tela', () => {
    expect(screen.getByText('Principal')).toBeInTheDocument();
    expect(screen.getByText('Adicionar Currículo')).toBeInTheDocument();
  });
  it('Testa se os títulos e a imagem estão na tela', () => {
    expect(screen.getByText('Gerenciador de Currículos')).toBeInTheDocument();
    expect(screen.getByAltText('Busca por candidatos')).toBeInTheDocument();
    expect(screen.getByText('Currículos cadastrados')).toBeInTheDocument();
  });
  it('Testa se existe um currículo listado na tela', () => {
    expect(screen.getByText('Currículos cadastrados')).toBeInTheDocument();
    expect(screen.getByText('Renata Nunes')).toBeInTheDocument();
  });
  it('Testa se é possível deletar um currículo listado', () => {
    expect(screen.getByText('Currículos cadastrados')).toBeInTheDocument();
    const buttonDelete = screen.getAllByAltText('Delete')[0];
    expect(buttonDelete).toBeInTheDocument();
    userEvent.click(buttonDelete);
    expect(buttonDelete).not.toBeInTheDocument();
  });
});
