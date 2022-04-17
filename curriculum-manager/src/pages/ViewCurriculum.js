import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

function ViewCurriculum() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const curriculums = JSON.parse(localStorage.getItem('curriculums'));
    const curriculumData = curriculums.find((curriculum) => curriculum.id === id);
    setData(curriculumData);
  }, []);

  return (
    <div>
      <Header />
      <h3>{`${data.name}`}</h3>
      <h4>Dados Pessoais</h4>
      <p>{ `Localização: ${data.city}, ${data.state} - ${data.country}` }</p>
      <p>{ `Email: ${data.email}` }</p>
      <p>{ `Telefone: ${data.phone}` }</p>
      <p>{ `Linkedin: ${data.linkedin}` }</p>
      <p>{ `GitHub: ${data.github}` }</p>
      <p>{ `Identidade de gênero: ${data.gender}` }</p>
      <p>{ `Objetivo profissional: ${data.objective}` }</p>
      <h4>Formação</h4>
      <p>{ `Instituição: ${data.institution}` }</p>
      <p>{ `Curso: ${data.course}` }</p>
      <p>{ `${data['course-type']} (${data['course-start']} - ${data['course-conclusion']})` }</p>
      <h4>Experiência</h4>
      <p>{ `Empresa: ${data.company}` }</p>
      <p>{ `Cargo: ${data.position}` }</p>
      <p>{ `(${data['job-start']} - ${data['job-output']})` }</p>
      <p>{ `Descrição: ${data['job-description']}` }</p>
      <h4>Informações Complementares</h4>
      <p>{ `Descrição: ${data['others-info']}` }</p>
      <Footer />
    </div>
  );
}

export default ViewCurriculum;
