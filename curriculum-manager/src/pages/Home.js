import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContainerHome, ContainerLinks, LinkCurriculum } from '../styles/styles';

import illustration from '../assets/recruitment.png';
import doc from '../assets/doc.png';
import iconDelete from '../assets/delete.png';

function Home() {
  const [listCurriculum, setListCurriculum] = useState([]);

  useEffect(() => {
    const curriculums = JSON.parse(localStorage.getItem('curriculums'));
    setListCurriculum(curriculums);
  }, []);

  const deleteCurriculum = (id) => {
    const listFiltred = listCurriculum.filter((curriculum) => curriculum.id !== id);
    setListCurriculum(listFiltred);
    localStorage.setItem('curriculums', JSON.stringify(listFiltred));
  };

  const getList = (name, id) => (
    <ContainerLinks key={id}>
      <div>
        <img alt="Documento" src={doc} />
        <LinkCurriculum to={`/view/${id}`}>{name}</LinkCurriculum>
      </div>
      <button type="button" onClick={() => deleteCurriculum(id)}>
        <img alt="Delete" src={iconDelete} />
      </button>
    </ContainerLinks>
  );

  return (
    <ContainerHome>
      <Header />
      <img alt="Busca por candidatos" src={illustration} />
      <h3>Currículos cadastrados</h3>
      <section>
        { listCurriculum.map(({ name, id }) => getList(name, id)) }
      </section>
      <Footer />
    </ContainerHome>
  );
}

export default Home;
