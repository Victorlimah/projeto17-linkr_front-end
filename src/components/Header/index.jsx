import * as S from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Header({ picture }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <S.Title>linkr</S.Title>
        <S.User onClick={() => setShow(!show)}>
          {show ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
          <S.UserPicture src={picture} />
        </S.User>
      </S.Header>
      {show ? <Profile /> : null}
    </>
  );

  function Profile() {
    return (
      <S.Container onClick={() => setShow(!show)}>
        <S.Profile onClick={() => logout()}>
          <S.ProfileItem>Logout</S.ProfileItem>
        </S.Profile>
      </S.Container>
    );
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/signin");
  }
}
