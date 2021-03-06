import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  background-color: #151515;

  @media (min-width: 768px) {
    width: 60%;
    height: 100vh;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  width: 100%;
  text-align: center;
  font-weight: 900;
  font-size: 76px;
  line-height: 84px;
  letter-spacing: 0.05em;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 40%;
    text-align: left;
  }
`;

export const Description = styled.p`
  width: 40%;
  font-weight: 900;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: justify;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-color: #333333;

  @media (min-width: 768px) {
    width: 40%;
    height: 100vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #333333;
  padding: 1rem;

  button {
    width: 85%;
    height: 2.3em;
    border: none;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    font-size: 1.5rem;
    background-color: #1877f2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    background-color: #5c19b5;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const FormInputField = styled.input`
  width: 80%;
  height: 2.3em;
  border: none;
  border-radius: 0.5rem;
  background-color: #151515;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0 1rem;
  font-size: 1.5rem;
`;

export const Button = styled.span`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: underline;
  text-align: center;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
