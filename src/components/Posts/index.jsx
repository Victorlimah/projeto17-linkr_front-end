import * as S from "./styles";
import urlMetadata from "url-metadata";

export default function Posts() {
    return (
        <S.Container>
            <S.UserPicture />
            <S.PostBody>
                <h2>Juvenal Juvêncio</h2>
                <p>Muito maneiro esse tutorial de material UI com React, deem uma olhada! #React #material</p>
                <S.linkCard></S.linkCard>
            </S.PostBody>
        </S.Container>
    )
}