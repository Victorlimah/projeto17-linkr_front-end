import styled from "styled-components";

export const SearchAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
`;

export const SearchEmpty = styled.div`
  display: flex;
  z-index: 5;
  justify-content: center;
  border-radius: 0;
  position: fixed;

  .input {
    width: 500px;
    height: 30px;
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    margin-left: 28px;
    border: none;
  }

  input::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #c6c6c6;
    padding-left: 18px;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: none;
    outline: 0;
  }

  .icon {
    font-size: 28px;
    right: 5px;
    top: 3px;
    position: absolute;
    color: #c6c6c6;
  }

  @media (max-width: 829px) {
    position: fixed;
    top: 55px;
    left: 0;
    width: 100%;
    border-top: 10px solid #333333;

    .input {
      width: 89%;
      height: 40px;
      margin: 0 auto;
    }

    .input:focus {
      border: 1px solid #333333;
    }

    .icon {
      right: 45px;
      top: 8px;
    }
  }

  @media (max-width: 440px) {
    .icon {
      right: 25px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  width: 504px;
  margin-left: 27px;
  justify-content: center;
  padding-top: 35px;
  background: ${(props) => (props.isEmpty ? "" : "#E7E7E7")};
  padding-bottom: ${(props) => (props.isEmpty ? "" : "10px")};
  border-radius: ${(props) => (props.isEmpty ? "0px 0px 8px 8px" : "8px")};

  @media (max-width: 829px) {
    position: fixed;
    width: 89.5%;
    top: 80px;
    z-index: 4;
    margin-left: -26px;
  }

`;
