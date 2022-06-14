import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
`;

export const PostsColumn = styled.div`
   width: 100%
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (min-width: 768px) {
     width: 611px;
  }
`

export const H2 = styled.h2`
  display: flex;
  margin-left: 17px;
  margin-top: 91px;
  width: 111px;
  height: 49px;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 49px;
  color: #FFFFFF;

  @media (min-width: 768px) {
    margin-left: 0px;
    margin-top: 78px;
  }
`
