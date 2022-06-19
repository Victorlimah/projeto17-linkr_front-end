import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataContext from "../../providers/DataContext";
import axios from "axios";

import * as S from "./style";

import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Trending from "../../components/Trending";
import LoadingPage from '../../components/LoadingPage';

export default function Hashtag() {
  const [posts, setPosts] = useState([]);
  const { hashtag } = useParams();
  const [load, setLoad] = useState(true)
  const [hashtagTitle, setHashtagTitle] = useState('')
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const API = data.API;

  useEffect(() => {
    redirect(hashtag)
  }, [setPosts, API, ]);

  function HashtagTitle() {
    return <S.H2># {hashtagTitle}</S.H2>;
  }

  if (load) {
    return (
      <S.Loader>
        <LoadingPage />
      </S.Loader>
    )
  } else {
    return (
      <S.Container>
        <S.Wrapper>
          <S.PostsColumn>
            <Header picture={data.user.picture} />
            <HashtagTitle />
            {posts.map((item, index) => {
              return (
                <Posts
                  postId={item.id}
                  key={item.username + item.description + index}
                  name={item.username}
                  picture={item.picture}
                  link={item.link}
                  description={item.description}
                  linkDescription={item.linkDescription}
                  linkTitle={item.linkTitle}
                  linkPicture={item.linkPicture}
                  redirect={redirect}
                />
              );
            })}
          </S.PostsColumn>
          <Trending redirect={redirect} />
        </S.Wrapper>
      </S.Container>
    );
  }

  async function redirect(val) {
    setLoad(true)
    val = val.replace("#", "");
    navigate(`/hashtag/${val}`)
    criarPost(val);
    setHashtagTitle(val)
  }

  async function criarPost(val) {
    try {
      const request = await axios.get(`${API}/hashtag-timeline/${val}`);
      const { data } = request;
      setPosts([...data]);
      setLoad(false)
    } catch (e) {
      console.log(e, "erro no criarPost");
    }
  }
}
