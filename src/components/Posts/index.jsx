import * as S from "./styles";
import urlMetadata from "url-metadata";

export default function Posts() {
    const { name, picture, link, description} = props;
    return (
        <S.Container>
            <S.UserPicture src={picture}/>
            <S.PostBody>
                <h2>{name}</h2>
                <p>{description}</p>
                <S.linkCard>
                    
                </S.linkCard>
            </S.PostBody>
        </S.Container>
    )
}