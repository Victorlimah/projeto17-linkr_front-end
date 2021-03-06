import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background: #151515;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: visible;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  letter-spacing: 0.05em;
  color: #ffffff;
  cursor: pointer;  
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  svg {
    color: #ffffff;
    margin-right: 10px;
  }
`;

export const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  cursor: pointer;
  background: #151515;
  border-radius: 0 0 0 30px;
  padding: 18px 30px;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 1;
`;

export const ProfileItem = styled.h3`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;
