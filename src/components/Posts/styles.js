import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 232px;
  position: relative;
  margin-bottom: 16px;
  background: #171717;

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

  @media (min-width: 768px) {
    width: 490px;
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

  @media (min-width: 768px) {
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
  }
`