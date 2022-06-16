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

export const TrendingContainer = styled.aside`
  width: 301px;
  height: 406px;
  margin: 140px 0 0 25px;
  background-color: #171717;
  border-radius: 16px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 61px;
  border-bottom: 1px solid #484848; ;
  margin: 0 0 22px 0;
`;

export const TrendingTitle = styled.h3`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 61px;
  color: #ffffff;
  margin-left: 16px;
`;

export const TrendingTag = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
  color: #ffffff;
  margin-left: 16px;
`
