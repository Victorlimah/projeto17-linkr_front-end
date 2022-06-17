import styled from "styled-components";

export const SearchEmpty = styled.div`
  display: flex;
  width: 563px;
  z-index: 3;
  justify-content: center;

  input{
  width: 529px;
  height: 45px;
  margin: 0 auto 0;
  padding-right: 17px;
  padding-left: 17px;
  background: #FFFFFF;
  border-radius: 8px;
  border: none;
  }

  input::placeholder{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #C6C6C6;
  }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 23px;
  margin-top: 160px;
  background: #E7E7E7;
  width: 563px;
  z-index: 3;
  justify-content: center;
  border-radius: 8px;

  input{
  width: 529px;
  height: 45px;
  margin: 0 auto 0;
  padding-right: 17px;
  padding-left: 17px;
  background: #FFFFFF;
  border-radius: 8px;
  border: none;
  }

  input::placeholder{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #C6C6C6;
  }
  }
`;
