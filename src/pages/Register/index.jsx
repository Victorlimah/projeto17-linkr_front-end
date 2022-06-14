import axios from "axios";
import * as S from "./styles";
import { useState } from "react";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export default function Register() {
 const [loading, setLoading] = useState(false);
 const [textInput, setTextInput] = useState("Log In");
 const [form, setForm] = useState({ email: "", password: "", username: "", picture: "" });

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
        <S.Form onSubmit={register} >
          <S.FormInputField
            required
            name="email"
            type="email"
            placeholder="e-mail"
            disabled={loading}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <S.FormInputField
            required
            name="password"
            type="password"
            placeholder="password"
            disabled={loading}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <S.FormInputField
            required
            name="username"
            type="text"
            placeholder="username"
            disabled={loading}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          <S.FormInputField
            required
            name="picture"
            type="text"
            placeholder="picture url"
            disabled={loading}
            onChange={(e) => setForm({ ...form, picture: e.target.value })}
          />

          <button type="submit" disabled={loading}>
            {textInput}
          </button>

          <S.Button onClick={() => navigate("/signin")}>
            Switch back to log in
          </S.Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  );

  async function register(event) { event.preventDefault();
    setLoading(true);
    setTextInput(Loading());

    try {
      await axios.post('/api/login', form);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTextInput('Log In');
    }
  }
}
