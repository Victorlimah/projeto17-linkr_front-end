import styled from "styled-components";

export const SearchAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  border-radius: 8px;

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
  width: 80%;
  z-index: 5;
  justify-content: center;
  border-radius: 8px;
  position: fixed;

  .input {
    width: 529px;
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
    right: 5px;
    top: 6px;
    position: absolute;
    color: #c6c6c6;
  }

  @media (max-width: 829px) {
    position: fixed;
    top: 75px;
    width: 95%;
    left: 0px;

    .input {
      width: 95%;
      height: 40px;
      left: 10px;
      right: 10px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -60px;
  width: 563px;
  justify-content: center;
  margin-top: 10px;
  padding-top: 30px;
  background: ${(props) => (props.isEmpty ? "" : "#E7E7E7")};
  margin-top: ${(props) => (props.isEmpty ? "" : "88px")};
  padding-bottom: ${(props) => (props.isEmpty ? "" : "23px")};
  border-radius: ${(props) => (props.isEmpty ? "0px 0px 8px 8px" : "8px")};

  @media (max-width: 829px) {
    top: 75px;
    width: 100%;
    position: absolute;
    top: -5px;
    left: 10px;
    right: 10px;
  }
`;
