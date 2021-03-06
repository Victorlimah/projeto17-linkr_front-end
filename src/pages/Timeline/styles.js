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
  margin-top: 130px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PostsColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h5 {
    margin-top: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    width: 611px;
  }
`;

export const H2 = styled.div`
  margin-left: 0;
  width: 90%;
  height: 49px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 49px;
  color: #ffffff;
  text-align: flex-start;

  @media (max-width: 830px) {
    width: 100%;
    text-align: center;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: #ffffff;
  }
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
`;
