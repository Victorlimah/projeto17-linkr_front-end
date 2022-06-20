import styled from 'styled-components'

export const TrendingContainer = styled.aside`
  width: 301px;
  max-width: 301px;
  height: 406px;
  margin: 0 0 0 25px;
  background-color: #171717;
  border-radius: 16px;
  margin-top: 60px;

  @media (max-width: 800px) {
    display: none;
  }
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