import * as S from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Header({picture}){
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Title>linkr</S.Title>
      <S.User onClick={() => setShow(!show)}>
        {show ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
        <S.UserPicture src={picture} />
        {show ? <Profile /> : null}
      </S.User>
    </S.Header>
  );

  function Profile(){
    return (
      <S.Profile onClick={() => logout()}>
        <S.ProfileItem>Logout</S.ProfileItem>
      </S.Profile>
    );
  }

  function logout(){
    localStorage.removeItem('token');
    navigate('/signin');
  }
}