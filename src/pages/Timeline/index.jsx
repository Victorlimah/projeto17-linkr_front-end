import * as S from "./styles";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";

export default function Timeline() {
    return (
        <S.Container>
            <S.PostsColumn>
                <Header />
                <S.H2>timeline</S.H2>
                <NewPost />
                <Posts />
            </S.PostsColumn>
        </S.Container>
    )
}