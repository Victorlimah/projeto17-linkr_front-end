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
`;

export const PostsColumn = styled.div`
  width: 100%;
  max-width: 611px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H2 = styled.h2`
  margin-left: 17px;
  margin-top: 91px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 49px;
  color: #ffffff;
`;

export const Loader = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
background-color: #333333;

h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 84px;
  letter-spacing: 0.05em;
  color: #ffffff;
}
`
