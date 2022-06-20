import styled from "styled-components";

export const Form = styled.form`
  width: 375px;
  height: 164px;
  display: flex;
  margin-top: 13px;
  margin-bottom: 16px;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;

  img {
    display: none;
  }

  @media (min-width: 768px) {
    width: 611px;
    height: 209px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    img {
      display: flex;
      position: absolute;
      width: 50px;
      height: 50px;
      left: 15px;
      top: 16px;
      border-radius: 26.5px;
    }
  }

  @media (max-width: 440px) {
    width: 100%;
    border-radius: 0px;
  }
`; 

export const P = styled.p`
  width: 307px;
  height: 17px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  color: #707070;

  @media (min-width: 768px) {
    position: absolute;
    width: 445px;
    height: 25px;
    left: 16px;
    top: 10.5px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
  }
`

export const UrlInput = styled.input`
  width: 345px;
  height: 30px;
  background: #EFEFEF;
  border-radius: 5px;
  border: 0.1px solid #EFEFEF;
  padding-left: 11px;

  ::placeholder {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #949494;
  }

    @media (min-width: 768px) {
        position: absolute;
        width: 490px;
        height: 30px;
        left: 86px;
        top: 56px;
        background: #EFEFEF;
        border-radius: 5px;
      }
`

export const TextInput = styled.input`
  width: 344px;
  height: 47px;
  margin-top: 5px;
  background: #EFEFEF;
  border-radius: 5px;
  border: 0.1px solid #EFEFEF;
  padding-left: 11px;

  ::placeholder {
    display: flex;
    position: absolute;
    top: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #949494;
}

  @media (min-width: 768px) {
    position: absolute;
    width: 490px;
    height: 66px;
    left: 86px;
    top: 90px;
    background: #EFEFEF;
    border-radius: 5px;
  }
`

export const Button = styled.button`
  position: absolute;
  width: 112px;
  height: 22px;
  left: 250px;
  top: 130px;
  color: #ffffff;
  background: #1877F2;
  border-radius: 5px;
  border: 0.1px solid #1877F2;

  @media (min-width: 768px) {
    position: absolute;
    width: 112px;
    height: 31px;
    left: 479px;
    top: 170px;
    rigth: 16px;
    background: #1877F2;
    border-radius: 5px;
  }
`