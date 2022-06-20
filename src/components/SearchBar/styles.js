import styled from "styled-components";

export const SearchAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
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
  width: 600px;
  z-index: 5;
  justify-content: center;
  border-radius: 8px;
  position: fixed;

  .input {
    width: 500px;
    height: 30px;
    background: #ffffff;
    border-radius: 8px;
    border: 0.1px solid #ffffff;
    position: relative;
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
    border: 0 none;
    outline: 0;
  }

  .icon {
    font-size: 28px;
    right: 25px;
    top: 6px;
    position: relative;
    color: #c6c6c6;
  }

  @media (max-width: 829px) {
    position: fixed;
    top: 55px;
    left: 0;
    right: 0;
    width: 100%;

    .input {
      width: 500px;
      height: 40px;
      left: 10px;
      right: 10px;
      margin: 0 auto;
    }
  }

  @media (min-width: 830px) {
    .icon {
      position: relative;
      right: 40px;
      top: 4px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -60px;
  width: 600px;
  justify-content: center;
  margin-top: 10px;
  padding-top: 30px;
  background: ${(props) => (props.isEmpty ? "" : "#E7E7E7")};
  margin-top: ${(props) => (props.isEmpty ? "" : "88px")};
  padding-bottom: ${(props) => (props.isEmpty ? "" : "23px")};
  border-radius: ${(props) => (props.isEmpty ? "0px 0px 8px 8px" : "8px")};

  @media (max-width: 829px) {
    top: 50px;
    width: 500px;
    position: absolute;
    top: -5px;
    z-index: 4;
  }
`;
