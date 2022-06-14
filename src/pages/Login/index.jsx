import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Title>linkr</S.Title>
        <S.Description>
          save, share and discover the best links on the web
        </S.Description>
      </S.ContainerHeader>
      <S.ContainerForm>
        <S.Form>
          <S.FormInputField type="email" placeholder="e-mail" />
          <S.FormInputField type="password" placeholder="password" />
          <S.FormInputField  className='button' type="submit" value="Log In" />

          <S.Button onClick={() => navigate("/signup")}>
            First time? Create an account!
          </S.Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  );
}