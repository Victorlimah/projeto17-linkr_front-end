import * as S from "./styles";

export default function Posts(props) {
    const { name, picture, link, description, linkDescription, linkTitle, linkPicture } = props;
    console.log(linkTitle)
    console.log(linkPicture)
    return !linkPicture || !linkTitle ? (
        <S.Container>
            <S.UserPicture src={picture} />
            <S.PostBody>
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={link} target={link}>
                    <S.linkCard>
                        <h3>Unknow title</h3>
                        <p>{linkDescription}</p>
                        <h4>{link}</h4>
                        <img src="data:image/jpeg;base64,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" alt="unknow picture"></img>
                    </S.linkCard>
                </a>
            </S.PostBody>
        </S.Container>
    ) : (
        <S.Container>
            <S.UserPicture src={picture} />
            <S.PostBody>
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={link} target={link} >
                    <S.linkCard>
                        <h3>{linkTitle}</h3>
                        <p>{linkDescription}</p>
                        <h4>{link}</h4>
                        <img src={picture} alt="link photo"></img>
                    </S.linkCard>
                </a>
            </S.PostBody>
        </S.Container>
    )

}