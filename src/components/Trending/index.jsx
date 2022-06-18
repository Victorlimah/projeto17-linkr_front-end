import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import * as S from "./style";
import ReactHashtag from "@mdnm/react-hashtag";
import DataContext from "../../providers/DataContext";

export default function Trending(props) {
  let {redirect} = props
  const [hashtags, setHashtags] = useState([]);
  const { data } = useContext(DataContext);
  const API = data.API;

  useEffect(() => {
    criarTrending()
  }, []);

  async function criarTrending() {
    const getTags = await axios.get(`${API}/trending`);
    setHashtags(getTags.data);
  }

  return (
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
              redirect(val)
            }}
          >
            {"#" + e.name}
          </ReactHashtag>
        </S.TrendingTag>
      );
    })}
  </S.TrendingContainer>
  )
}