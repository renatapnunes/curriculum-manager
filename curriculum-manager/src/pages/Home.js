import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <div key={id}>
      <Link to={`/view/${id}`}>{name}</Link>
      <button type="button" onClick={() => deleteCurriculum(id)}>X</button>
    </div>
  );

  return (
    <div>
      <Header />
      <h3>Currículos cadastrados</h3>
      <section>
        { listCurriculum.map(({ name, id }) => getList(name, id)) }
      </section>
      <Footer />
    </div>
  );
}

export default Home;
