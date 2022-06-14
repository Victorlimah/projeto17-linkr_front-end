import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
          <S.FormInputField required type="email" placeholder="e-mail" />
          <S.FormInputField required type="password" placeholder="password" />
          <S.FormInputField required type="text" placeholder="username" />
          <S.FormInputField required type="text" placeholder="picture url" />
          <S.FormInputField className="button" type="submit" value="Sign Up" />

          <S.Button onClick={() => navigate("/signin")}>
            Switch back to log in
          </S.Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  );
}
