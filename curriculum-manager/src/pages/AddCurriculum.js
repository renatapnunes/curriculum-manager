import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';

import { ContainerAdd } from '../styles/styles';

function AddCurriculum() {
  return (
    <ContainerAdd>
      <Header />
      <h3>Cadastrar currículo</h3>
      <Form />
      <Footer />
    </ContainerAdd>
  );
}

export default AddCurriculum;
