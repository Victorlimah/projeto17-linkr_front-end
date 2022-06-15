import * as S from "./styles";
import { useState, useContext } from "react";
import DataContext from "../../providers/DataContext";
import axios from "axios";

export default function NewPost(props) {
    const { data } = useContext(DataContext);
    const API = data.API;

    const [form, setForm] = useState({ id: data.user.id, url: "", description: ""});
    const { publish, setPublish } = props;

    async function publicate(event) {
        event.preventDefault();
        setPublish(true);
        try {
            await axios.post(`${API}/timeline`, form);
            console.log("Posted succesfully")
            setPublish(false);
        } catch (err) {
            alert("An error occured while trying to post your link")
        }
    }

    return !publish ? (
        <S.Form onSubmit={publicate}>
            <S.P>What are you going to share today?</S.P>
            <img src={data.user.picture} alt="foto do perfil"></img>
            <S.UrlInput
                required
                type="url"
                placeholder="http://..."
                onChange={(e) => setForm({ ...form, url: e.target.value })}
            />
            <S.TextInput
                required
                type="text"
                placeholder="Awesome article about #javascript"
                onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <S.Button type="submit">Publish</S.Button>
        </S.Form>
    ) : (
        <S.Form>
            <S.P>What are you going to share today?</S.P>
            <img src={data.user.picture} alt="foto do perfil"></img>
            <S.UrlInput
                required
                type="url"
                placeholder="http://..."
            />
            <S.TextInput
                required
                type="text"
                placeholder="Awesome article about #javascript"
            />
            <S.Button>Publishing...</S.Button>
        </S.Form>
    )
}