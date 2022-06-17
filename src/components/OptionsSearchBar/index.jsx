import * as S from "./styles";

export default function OptionsSearchBar({ username, picture }) {
    return (
        <S.User>
            <img src={picture} alt="user" />
            <p>{username}</p>
        </S.User>
    );
}