import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
`;

export const PostsColumnUser = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 50px;

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

export const H2User = styled.div`
  margin-top: 91px;
  width: 375px;
  height: 49px;

  h2{
    margin-left: 17px;
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: #FFFFFF;
  }

  @media (min-width: 768px) {
    width: 611px;
    margin-top: 78px;

    h2{
      margin-left: 0px;
      font-family: 'Oswald', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 33px;
      line-height: 49px;
      color: #FFFFFF;
    }
  }
`

export const UserInfo = styled.div`
margin: 20px auto 0;
display: flex;
justify-content: left;
align-items: center;

img{
width: 50px;
height: 50px;
margin-left: 18px;
border-radius: 26.5px;  
}

h2{
margin-left: 17px;
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 49px;
color: #FFFFFF;
}
`

export const LoaderUser = styled.div`
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
