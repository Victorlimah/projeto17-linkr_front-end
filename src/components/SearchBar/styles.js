import styled from "styled-components";

export const SearchAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 563px;
  justify-content: center;
  border-radius: 8px;
`

export const SearchEmpty = styled.div`
  display: flex;
  width: 563px;
  z-index: 5;
  justify-content: center;
  border-radius: 8px;
  position: fixed;

  .input{
  width: 529px;
  height: 45px;
  margin: 0 auto 0;
  padding-right: 17px;
  padding-left: 17px;
  background: #FFFFFF;
  border-radius: 8px;
  border: 0.1px solid #FFFFFF;
  position: relative;
  }

  input::placeholder{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #C6C6C6;
  }

  .icon{
    font-size: 30px;
    right: 10px;
    top: 8px;
    position: absolute;
    color: #C6C6C6;
  }
`

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  width: 563px;
  justify-content: center;
  margin-top: 10px;
  padding-top: 55px;
  background: ${props => props.isEmpty ? "" : "#E7E7E7"};
  margin-top: ${props => props.isEmpty ? "" : "118px"};
  padding-bottom: ${props => props.isEmpty ? "" : "23px"};
  border-radius: ${props => props.isEmpty ? "0px 0px 8px 8px" : "8px"};
`;

