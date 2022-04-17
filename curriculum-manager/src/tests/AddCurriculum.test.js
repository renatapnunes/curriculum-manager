import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import AddCurriculum from '../pages/AddCurriculum';

beforeEach(() => renderWithRouter(<AddCurriculum />));

describe('Testa a pagina AddCurriculum.js', () => {
  it('Testa se os links do Header estão na tela', () => {
    expect(screen.getByText('Principal')).toBeInTheDocument();
    expect(screen.getByText('Adicionar Currículo')).toBeInTheDocument();
  });
  it('Testa se o título está na tela', () => {
    expect(screen.getByText('Cadastrar currículo')).toBeInTheDocument();
  });
  it('Testa se o botão adicionar está na tela', () => {
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();
  });
});
