import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
`;

export const PostsColumn = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

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
`

export const H2 = styled.h2`
  display: flex;
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
