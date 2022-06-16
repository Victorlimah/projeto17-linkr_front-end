import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataContext from "../../providers/DataContext";
import axios from "axios";
import ReactHashtag from "@mdnm/react-hashtag";

import * as S from "./style";
import Header from "../../components/Header";
import Posts from "../../components/Posts";

export default function Hashtag() {
  const [posts, setPosts] = useState([]);
  let { hashtag } = useParams();
  const [hashtagTitle, setHashtagTitle] = useState('')
  const [hashtags, setHashtags] = useState([]);
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const API = data.API;

  useEffect(() => {
    criarPost();
    criarTrending();
    setHashtagTitle(hashtag)
  }, [setPosts, API]);

  function HashtagTitle() {
    return <S.H2># {hashtagTitle}</S.H2>;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.PostsColumn>
          <Header picture={data.user.picture} />
          <HashtagTitle />
          {posts.map((item, index) => {
            return (
              <Posts
                key={item.username + item.description + index}
                name={item.username}
                picture={item.picture}
                link={item.link}
                description={item.description}
                linkDescription={item.linkDescription}
                linkTitle={item.linkTitle}
                linkPicture={item.linkPicture}
              />
            );
          })}
        </S.PostsColumn>
        <S.TrendingContainer>
          <S.TitleContainer>
            <S.TrendingTitle>trending</S.TrendingTitle>
          </S.TitleContainer>
          {hashtags.map((e, index) => {
            e.name = e.name.replace("#", "");
            return (
              <S.TrendingTag key={e.name + index}>
                <ReactHashtag
                  onHashtagClick={(val) => {
                    hashtag = val.replace("#", "");
                    navigate(`/hashtag/${hashtag}`)
                    criarPost();
                    criarTrending();
                    setHashtagTitle(hashtag)
                  }}
                >
                  {"#" + e.name}
                </ReactHashtag>
              </S.TrendingTag>
            );
          })}
        </S.TrendingContainer>
      </S.Wrapper>
    </S.Container>
  );

  async function criarPost() {
    try {
      const request = await axios.get(`${API}/hashtag-timeline/${hashtag}`);
      const { data } = request;
      setPosts(data);
    } catch (e) {
      console.log(e, "erro no criarPost");
    }
  }

  async function criarTrending() {
    const getTags = await axios.get(`${API}/trending`);
    setHashtags(getTags.data);
  }
}
