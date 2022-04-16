import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [listCurriculum, setListCurriculum] = useState([]);

  useEffect(() => {
    const curriculums = JSON.parse(localStorage.getItem('curriculums'));
    setListCurriculum(curriculums);
  }, []);

  return (
    <div>
      <h2>Currículos cadastrados</h2>
      <section>
        { listCurriculum.map(({ name, id }) => <Link key={id} to={`/view/${id}`}>{name}</Link>) }
      </section>
    </div>
  );
}

export default Home;
