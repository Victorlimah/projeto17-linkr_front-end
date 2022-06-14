import * as S from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Header({img}){
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Title>linkr</S.Title>
      <S.User onClick={() => setShow(!show)}>
        {show ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
        <S.UserPicture src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
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