import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #333333;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PostsColumn = styled.div`
  width: 100%;
  max-width: 611px;

  @media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;

export const H2 = styled.h2`
  margin-top: 91px;
  margin-bottom: 25px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 49px;
  color: #ffffff;
`;
