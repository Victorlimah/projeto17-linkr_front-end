import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 232px;
  position: relative;
  margin-bottom: 70px;
  background: #171717;
  border-radius: 16px;

  @media (min-width: 768px) {
    width: 611px;
    height: 276px;
    background: #171717;
    border-radius: 16px;
  }
`

export const UserPicture = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 15px;
  top: 9px;
  border-radius: 50%;
  margin-right: 10px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    left: 18px;
    top: 16px;
    border-radius: 26.5px;
  }
`;

export const PostBody = styled.div`
  position: absolute;
  width: 288px;
  height: 100%;
  left: 69px;
  display: flex;
  flex-direction: column;
  justify-content: left;

  h2 {
    margin-top: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
  } 

  p {    
    margin-top: 7px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #B7B7B7;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: 440px;
    margin-left: 18px;

    h2 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #FFFFFF;
        margin-top: 19px;
    }
  }
`

export const linkCard = styled.div`
  width: 278px;
  height: 115px;
  margin-top: 13px;
  border: 1px solid #4D4D4D;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  position: relative;

  h3 {
    width: 165px;
    margin-top: 7px;
    margin-left: 11px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    color: #CECECE;
  }

  p {
    width: 165px;
    margin-top: 4px;
    margin-left: 11px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 9px;
    color: #9B9595;
  }

  h4 {
    width: 155px;
    margin-top: 4px;
    margin-left: 11px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 9px;
    color: #CECECE;
  }

  img {
    position: absolute;
    width: 95px;
    height: 115px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: url(image.png);
    border-radius: 0px 11px 11px 0px;
  }

  @media (min-width: 768px) {
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;

    img {
      width: 153px;
      height: 155px;
    }

    h3 {
      width: 302px;
      margin-top: 22px;
      margin-left: 20px;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 17px;
      color: #CECECE;
    }
  
    p {
      width: 302px;
      margin-top: 5px;
      margin-left: 20px;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      color: #9B9595;
    }
  
    h4 {
      width: 302px;
      margin-top: 13px;
      margin-left: 20px;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      color: #CECECE;
    }
  }
`

export const Hashtag = styled.span`
  font-weight: bold;
  color: #FFFFFF;
`;

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 87px;
  left: 0;
  top: 82px;
  border-radius: 50%;
  margin-right: 10px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;

color: #FFFFFF;;

  svg{
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
      width: 70px;
      top: 60px;
  }
`;

export const CommentsContainer = styled.div`
display: flex;
flex-direction: column;
width: 87px;
align-items: center;
position: absolute;
left: 0;
top: 143px;
border-radius: 50%;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
text-align: center;

color: #FFFFFF;;

svg{
  width: 30px;
  height: 30px;
}

@media (max-width: 768px) {
  width: 70px;
  top: 115px;
}
`;

export const RepostsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
width: 87px;
left: 0;
top: 200px;
border-radius: 50%;
margin-right: 10px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
text-align: center;

color: #FFFFFF;;

svg{
  width: 30px;
  height: 30px;
}

@media (max-width: 768px) {
  width: 70px;
  top: 170px;
}

`;

export const PencilIcone = styled.div`
  position: absolute;
  top: 23px;
  right: 48.5px;

  .pencil-icone {
    position: absolute;
    top: 23px;
    right: 48.5px;
    color: #FFFFFF;
    width: 20px;
    height: 20px;
  }

`

export const TrashIcone = styled.div`
  position: absolute;
  top: 23px;
  right: 22px;

  .trash-icone {
    position: absolute;
    top: 23px;
    right: 22px;
    color: #FFFFFF;
    width: 20px;
    height: 20px;
  }
`

export const ModalContainer = styled.div`
  width: 597px;
  height: 262px;
  background: #333333;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    width: 338px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 40px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const CancelButton = styled.button`
  width: 134px;
  height: 37px;
  background: #FFFFFF;
  border-radius: 5px;
  margin-right: 10px;
  border: 0;

  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #1877F2;
  }
`

export const DeleteButton = styled.button`
  width: 134px;
  height: 37px;
  background: #1877F2;
  border-radius: 5px;
  margin-left: 10px;
  border: 0;

  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
  }
`

export const InputEditing = styled.input`
  width: 278px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 5px;
  border: 0.1px solid #FFFFFF;
  padding-left: 11px;
  margin-top: 17px;

  @media (min-width: 768px) {
      width: 490px;
      height: 35px;
      left: 86px;
      top: 56px;
      background: #FFFFFF;
      border-radius: 5px;
      margin-top: 11px;
    }
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const repostTagContainer = styled.div`
  background: #1E1E1E;
  width: 375px;
  height: 45px;
  position: absolute;
  top: -30px;
  border-radius: 16px 16px 0 0;
  color: #FFFFFF;

  svg {
    position: absolute;
    left: 10px;
    top: 3px;
    height: 25px;
    width: 25px;
  }
  
  p {
    position: absolute;
    left: 40px;
    top: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }
  

  @media (min-width: 768px) {
    width: 611px;
  }
  
`

export const repostTagContainer2 = styled.div`
  background: #171717;
  width: 375px;
  height: 30px;
  position: absolute;
  top: 0;
  border-radius: 16px;

  @media (min-width: 768px) {
    width: 611px;
  } 
`

export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  width: 87px;

`;