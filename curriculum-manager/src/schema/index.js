import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('O nome é de preenchimento obrigatório'),
  city: yup.string().required('A cidade é de preenchimento obrigatório'),
  state: yup.string().required('O estado é de preenchimento obrigatório'),
  country: yup.string().required('O país é de preenchimento obrigatório'),
  email: yup.string().email('O endereço preenchido não é um email válido').required('O email é de preenchimento obrigatório'),
  phone: yup.string().required('O telefone é de preenchimento obrigatório'),
  linkedin: yup.string(),
  github: yup.string(),
  gender: yup.string(),
  objective: yup.string().required('O objetivo é de preenchimento obrigatório'),
  institution: yup.string(),
  course: yup.string(),
  'course-type': yup.string(),
  'course-start': yup.number(),
  'course-conclusion': yup.number(),
  company: yup.string(),
  position: yup.string(),
  'job-start': yup.number(),
  'job-output': yup.number(),
  'job-description': yup.string(),
  'orthers-info': yup.string(),
}).required();

export default schema;
