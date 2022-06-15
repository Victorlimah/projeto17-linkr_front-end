import * as S from "./styles";
import urlMetadata from "url-metadata";

export default function Posts(props) {
    const { name, picture, link, description, linkDescription, linkTitle, linkPicture } = props;
    return !linkPicture ? (
        <S.Container>
            <S.UserPicture src={picture} />
            <S.PostBody>
                <h2>{name}</h2>
                <p>{description}</p>
                <S.linkCard>
                    <h3>{linkTitle}</h3>
                    <p>{linkDescription}</p>
                    <h2>{link}</h2>
                </S.linkCard>
            </S.PostBody>
        </S.Container>
    ) : (
        <S.Container>
            <S.UserPicture src={picture} />
            <S.PostBody>
                <h2>{name}</h2>
                <p>{description}</p>
                <S.linkCard>
                    <h3>{linkTitle}</h3>
                    <p>{linkDescription}</p>
                    <h4>{link}</h4>
                    <img>{linkPicture}</img>
                </S.linkCard>
            </S.PostBody>
        </S.Container>
    )
}