import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../providers/DataContext";

import * as S from "./styles";

export default function OptionsSearchBar({ username, picture, id }) {

    const { setIdUser } = useContext(DataContext);

    return (
        <Link to={`/user/${id}`}>
            <S.User onClick={() => setIdUser(id)}>
                <img src={picture} alt="user" />
                <p>{username}</p>
            </S.User>
        </Link>
    );
}