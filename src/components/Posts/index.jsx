import * as S from "./styles";
import { useState, useContext, useEffect } from "react";
import ReactHashtag from "@mdnm/react-hashtag";
import {AiOutlineHeart} from "react-icons/ai/";
import {AiFillHeart} from "react-icons/ai/";
import DataContext from "../../providers/DataContext";
import axios from "axios";

export default function Posts(props) {
    const { postId, name, picture, link, description, linkDescription, linkTitle, linkPicture, redirect } = props;
    const photo = "data:image/png;base64,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"
    const [ liked, setLiked ] = useState(false);
    const { data } = useContext(DataContext);
    const API = data.API;
    const username = data.user.username;

    console.log(postId + " " + username + " " + liked);

    useEffect(() => {
       async function checkLiked() {
         const request = await axios.post(`${API}/checkLiked`, {username, postId});
         const { data } = request;
         setLiked(data.liked);
         console.log(liked);
       }
      checkLiked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Fazer a requisição para o servidor para curtir o post
    async function like() {
        const request = await axios.post(`${API}/like`, { name });
        const { data } = request;
        setLiked(data.liked);
    }

    //Fazer a requisição para o servidor para descurtir o post
    async function unlike() {
        const request = await axios.post(`${API}/unlike`, { name });
        const { data } = request;
        setLiked(data.liked);
    }

    const likes = 0;
    return (
      <S.Container>
        <div>
          <S.UserPicture src={picture} />
          <S.LikesContainer onClick={() => setLiked(!liked)}>
            {liked ? <AiFillHeart color="#ff0000" /> : <AiOutlineHeart />}
            <p>{likes} likes</p>
          </S.LikesContainer>
        </div>
        <S.PostBody>
          <h2>{name}</h2>
          <p>
            <ReactHashtag
              onHashtagClick={(val) => {
                redirect(val);
              }}
            >
              {description}
            </ReactHashtag>
          </p>
          <a href={link} target={link}>
            <S.linkCard>
              <h3>{linkTitle ? linkTitle : "Unknow title"}</h3>
              <p>{linkDescription}</p>
              <h4>{link}</h4>
              <img src={linkPicture ? linkPicture : photo} alt="Banner post" />
            </S.linkCard>
          </a>
        </S.PostBody>
      </S.Container>
    ); 

}