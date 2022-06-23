import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333333;

  @media (max-width: 800px) {
    justify-content: flex-start;
  } 
`;

export const Division = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
    text-align: center;
    margin-top: 100px;
  }
`;

export const PostsColumnUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
`;

export const H2User = styled.div`
  h2 {
    margin-left: 17px;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: #ffffff;
  }
  @media (max-width: 800px) {
    margin-top: 150px;
    
    div h2{
      font-size: 25px;
    }
  }
  `;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin-top: 50px;
  
  div{
    display: flex;
  }

  img {
    width: 50px;
    height: 50px;
    margin-left: 18px;
    border-radius: 26.5px;
  }

  h2 {
    margin-left: 17px;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: #ffffff;
  }

`;

export const LoaderUser = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #333333;

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 84px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
`;

export const Follow = styled.button`
  display: ${(props) => (props.isUser ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.following ? "#1877F2" : "#ffffff")};
  background-color: ${(props) => (props.following ? "#ffffff" : "#1877F2")};
  padding: 8px 12px;
  border-radius: 5px;
  border: none;

  .follow-selected{
  background: #FFFFFF;
  color: #1877F2;
  }

  .follow-not-selected{
  background: #1877F2;
  color: #FFFFFF;
  }
`;