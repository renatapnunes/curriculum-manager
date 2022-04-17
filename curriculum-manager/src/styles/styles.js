import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.header`
  background-color: #8cbcb9;
  color: #8d6a9f;
  padding: 0.5rem;
  text-align: center;
  width: 100%;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const LinkStyle = styled(Link)`
  color: #06113e;
  font-size: 0.8rem;
  margin: 1.5rem;
  text-decoration: none;
`;

export const ContainerHome = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  margin-bottom: 5rem;

  img {
    height: 15rem;
    margin: 1rem;
    width: 15rem;
  }

  h3 {
    color: #dda448;
    margin: 0.8rem;
  }

  @media screen and (min-width: 376px) {
    img {
      height: 25rem;
      margin: 0.5rem;
      width: 25rem;
    }
  }
`;

export const ContainerLinks = styled.div`
    align-items: center;
    box-shadow: 0.1rem 0.1rem 0.2rem #c5cbd3;
    border-radius: 0.5rem;
    color: #06113e;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 1rem;
    padding: 0.5rem;
    width: 20rem;

    div {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
    }

    img {
      height: 1.6rem;
      width: 1.6rem;
    }

    button {
      background-color: #fff;
      border: none;
    }

    button:hover {
      background-color: #fff;
      border: none;
      transform: scale(1.2);
    }
`;

export const LinkCurriculum = styled(Link)`
  color: #06113e;
  text-decoration: none;
`;

export const FooterStyle = styled.footer`
  background-color: #c5cbd3;
  bottom: 0;
  color: #fff;
  font-size: 0.8rem;
  left: 0;
  margin-top: 100%;
  padding: 0.8rem;
  position: fixed;
  text-align: center;
  width: 100%;
`;

export const ContainerAdd = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    color: #dda448;
    margin: 2rem 0.8rem 0.8rem 0.8rem;
    text-align: center;
  }
`;

export const FormStyle = styled.form`
  color: #06113e;
  margin-bottom: 5rem;
  padding: 1.5rem;
  width: 90%;

  h4 {
    margin-top: 1.5rem;
  }

  hr {
    margin: 0.3rem;
  }

  label {
    align-items: flex-start;
    display: flex;
    flex-flow: column wrap;
    font-size: 0.7rem;
    justify-content: space-evenly;
    margin: 0.5rem;
    padding-left: 1rem;
  }

  input, textarea, select {
    border: none;
    box-shadow: 0.1rem 0.1rem 0.2rem #c5cbd3;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    outline: none;
    padding: 0.6rem;
    width: 90%;
  }

  textarea {
    height: 5rem;
    resize: none;
  }

  select {
    background-color: #fff;
  }

  span {
    color: 'red';
  }

  button {
    background-color: #6eaaa6;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem 0.3rem #c5cbd3;
    color: #fff;
    padding: 0.5rem;
    margin-left: 60%;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #7db2af;
  }

  button:active {
    box-shadow: 0.1rem 0.1rem 0.1rem #b4bcc7;
  }

  @media screen and (min-width: 376px) {
    width: 50%;

    label {
      margin: 1.2rem;
    }

    input, textarea, select {
      width: 80%;
    }

    button {
      margin-left: 80%;
    }
  }
`;

export const ContainerView = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  margin-bottom: 5rem;
`;

export const Data = styled.div`
  align-items: center;
  color: #06113e;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  text-align: justify;

  p {
    padding: 0.5rem;
    width: 80%;
  }

  hr {
    color: #06113e;
    width: 60%;
  }

  h4 {
    margin: 1rem;
  }

  h3 {
    color: #7a598b;
    margin: 1.5rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: 376px) {
    p {
      width: 60%;
    }

    hr {
      width: 40%;
    }
  }
`;
