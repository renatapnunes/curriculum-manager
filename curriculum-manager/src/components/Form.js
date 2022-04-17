import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import uniqid from 'uniqid';

import schema from '../schema';
import { FormStyle } from '../styles/styles';

function Form() {
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (curriculumData) => {
    const newCurriculum = { ...curriculumData, id: uniqid() };
    const curriculums = JSON.parse(localStorage.getItem('curriculums'));
    if (!curriculums) {
      localStorage.setItem('curriculums', JSON.stringify([newCurriculum]));
    } else {
      localStorage.setItem('curriculums', JSON.stringify([...curriculums, newCurriculum]));
    }
    reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <h4>Dados Pessoais</h4>
      <hr />
      <label htmlFor="name">
        Nome:*
        <input {...register('name', { required: true })} />
        <span>{ errors.name?.message}</span>
      </label>
      <div>
        <label htmlFor="city">
          Cidade:*
          <input {...register('city', { required: true })} />
          <span>{ errors.city?.message}</span>
        </label>
        <label htmlFor="state">
          Estado:*
          <input {...register('state', { required: true })} />
          <span>{ errors.state?.message}</span>
        </label>
        <label htmlFor="country">
          País:*
          <input {...register('country', { required: true })} />
          <span>{ errors.country?.message}</span>
        </label>
      </div>
      <label htmlFor="email">
        Email:*
        <input {...register('email', { required: true })} placeholder="exemplo@email.com" />
        <span>{ errors.email?.message}</span>
      </label>
      <label htmlFor="phone">
        Telefone:*
        <input {...register('phone', { required: true })} />
        <span>{ errors.phone?.message}</span>
      </label>
      <label htmlFor="linkedin">
        Linkedin:
        <input {...register('linkedin')} />
      </label>
      <label htmlFor="github">
        GitHub:
        <input {...register('github')} />
      </label>
      <label htmlFor="gender">
        Identidade de gênero:
        <input {...register('gender')} />
      </label>
      <label htmlFor="objective">
        Objetivo profissional:*
        <textarea {...register('objective', { required: true })} maxLength={300} />
        <span>{ errors.objective?.message}</span>
      </label>
      <h4>Formação</h4>
      <hr />
      <label htmlFor="institution">
        Instituição:
        <input {...register('institution')} />
      </label>
      <label htmlFor="course">
        Curso:
        <input {...register('course')} />
      </label>
      <div>
        <label htmlFor="course-type">
          Tipo de curso:
          <select {...register('course-type')}>
            {[
              'Ensino Médio',
              'Graduação',
              'Especialização',
              'Mestrado',
              'Doutorado',
              'Curso Complementar',
            ].map((option) => (
              <option key={uniqid()} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="course-start">
          Ano de início:
          <input type="number" {...register('course-start')} />
        </label>
        <label htmlFor="course-conclusion">
          Ano de conclusão:
          <input type="number" {...register('course-conclusion')} />
        </label>
      </div>
      <h4>Experiência</h4>
      <hr />
      <label htmlFor="company">
        Empresa:
        <input {...register('company')} />
      </label>
      <label htmlFor="position">
        Cargo:
        <input {...register('position')} />
      </label>
      <div>
        <label htmlFor="job-start">
          Ano inicial:
          <input type="number" {...register('job-start')} />
        </label>
        <label htmlFor="job-output">
          Ano de saída:
          <input type="number" {...register('job-output')} />
        </label>
      </div>
      <label htmlFor="job-description">
        Descrição:
        <textarea {...register('job-description', { required: true })} maxLength={300} />
      </label>
      <h4>Informações Complementares</h4>
      <hr />
      <label htmlFor="others-info">
        Informações complementares:
        <textarea {...register('others-info', { required: true })} maxLength={600} />
      </label>
      <button type="submit">Adicionar</button>
    </FormStyle>
  );
}

export default Form;
