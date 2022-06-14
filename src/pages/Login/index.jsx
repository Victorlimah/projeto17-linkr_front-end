import axios from 'axios';
import * as S from './styles';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import DataContext from '../../providers/DataContext';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState('Log In');
  const [form, setForm] = useState({email: '', password: ''});

  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const API = data.API;

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Title>linkr</S.Title>
        <S.Description>
          save, share and discover the best links on the web
        </S.Description>
      </S.ContainerHeader>
      <S.ContainerForm>
        <S.Form onSubmit={login}>
          <S.FormInputField
            required
            type="email"
            placeholder="e-mail"
            disabled={loading}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <S.FormInputField
            required
            type="password"
            placeholder="password"
            disabled={loading}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit" disabled={loading}>{textInput}</button>

          <S.Button onClick={() => navigate("/signup")}>
            First time? Create an account!
          </S.Button>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  );

  async function login(event) {
    event.preventDefault();
    setLoading(true);
    setTextInput(Loading());

    try {
      const response = await axios.post(`${API}/signin`, form);
      localStorage.setItem('token', response.data.token); 
      navigate("/timeline");
    } catch (error) {
      console.log(error);
      alert('Invalid e-mail or password');
    } finally {
      setLoading(false);
      setTextInput('Log In');
    }
  }

}