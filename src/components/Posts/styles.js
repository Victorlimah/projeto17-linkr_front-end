import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 232px;
  position: relative;
  background: #171717;
  border-radius: ${(props) => (props.comment ? "16px 16px 0 0" : "16px")};
  margin-bottom: ${(props) => (props.comment ? "200px" : "70px")};

  @media (min-width: 768px) {
    width: 611px;
    height: 276px;
    background: #171717;
    border-radius: ${(props) => (props.comment ? "16px 16px 0 0" : "16px")};
  }
`;

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
  position: absolute;
  top: 0;

  h2 {
    margin-top: 10px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }

  p {
    margin-top: 7px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #b7b7b7;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: 440px;
    margin-left: 18px;

    h2 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #ffffff;
      margin-top: 19px;
    }
  }
`;

export const linkCard = styled.div`
  width: 278px;
  height: 115px;
  margin-top: 13px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  position: relative;

  h3 {
    width: 165px;
    margin-top: 7px;
    margin-left: 11px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    color: #cecece;
  }

  p {
    width: 165px;
    margin-top: 4px;
    margin-left: 11px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 9px;
    color: #9b9595;
  }

  h4 {
    width: 155px;
    margin-top: 4px;
    margin-left: 11px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 9px;
    color: #cecece;
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
    border: 1px solid #4d4d4d;
    border-radius: 11px;

    img {
      width: 153px;
      height: 155px;
    }

    h3 {
      width: 302px;
      margin-top: 22px;
      margin-left: 20px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 17px;
      color: #cecece;
    }

    p {
      width: 302px;
      margin-top: 5px;
      margin-left: 20px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      color: #9b9595;
    }

    h4 {
      width: 302px;
      margin-top: 13px;
      margin-left: 20px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      color: #cecece;
    }
  }
`;

export const Hashtag = styled.span`
  font-weight: bold;
  color: #ffffff;
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
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;

  color: #ffffff;

  svg {
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
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;

  color: #ffffff;

  svg {
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
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;

  color: #ffffff;

  svg {
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
    color: #ffffff;
    width: 20px;
    height: 20px;
  }
`;

export const TrashIcone = styled.div`
  position: absolute;
  top: 23px;
  right: 22px;

  .trash-icone {
    position: absolute;
    top: 23px;
    right: 22px;
    color: #ffffff;
    width: 20px;
    height: 20px;
  }
`;

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
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const CancelButton = styled.button`
  width: 134px;
  height: 37px;
  background: #ffffff;
  border-radius: 5px;
  margin-right: 10px;
  border: 0;

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #1877f2;
  }
`;

export const DeleteButton = styled.button`
  width: 134px;
  height: 37px;
  background: #1877f2;
  border-radius: 5px;
  margin-left: 10px;
  border: 0;

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
`;

export const InputEditing = styled.input`
  width: 278px;
  height: 20px;
  background: #ffffff;
  border-radius: 5px;
  border: 0.1px solid #ffffff;
  padding-left: 11px;
  margin-top: 17px;

  @media (min-width: 768px) {
    width: 490px;
    height: 35px;
    left: 86px;
    top: 56px;
    background: #ffffff;
    border-radius: 5px;
    margin-top: 11px;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const repostTagContainer = styled.div`
  background: #1e1e1e;
  width: 375px;
  height: 45px;
  position: absolute;
  top: -30px;
  border-radius: 16px 16px 0 0;
  color: #ffffff;

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
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    width: 611px;
  }
`;

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
`;

export const ContainerComments2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerComments3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  position: relative;
  bottom: -273px;
  color: #ffffff;
  background-color: #1e1e1e;
  border-bottom: 1px solid #353535;

  @media (min-width: 768px) {
    width: 611px;
  }
`;

export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  position: relative;
  bottom: -273px;
  color: #ffffff;
  background-color: #1e1e1e;
  border-radius: 0 0 16px 16px;

  @media (min-width: 768px) {
    width: 611px;
  }
`;

export const Comment = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding: 7px 0;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 25px;
  }
`;

export const CommentsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 45px;
  border-radius: 16px;
  color: #ffffff;

  input {
    width: 100%;
    padding: 5px;
    border-radius: 8px;
    border: none;
    background-color: #252525;
    font-family: "Lato";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #e5e5e5;
    padding: 10px;
  }

  input::placeholder {
    color: #575757;
  }

  input:focus {
    outline: none;
  }

  svg {
    position: absolute;
    right: 7%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const CommentsHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  border-radius: 16px 16px 0 0;
`;

export const CommentsName = styled.h3`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #f3f3f3;
`;

export const CommentsDetails = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #565656;
  margin-left: 10px;
`;

export const CommentsText = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ACACAC;
width: 100%;
`;



