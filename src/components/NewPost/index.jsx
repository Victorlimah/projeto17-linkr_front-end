import * as S from "./styles";

export default function NewPost() {
    return (
        <S.Form>
            <S.P>What are you going to share today?</S.P>
            <img src="" alt="foto do perfil"></img>
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
            <S.Button>Publish</S.Button>
        </S.Form>
    )
}