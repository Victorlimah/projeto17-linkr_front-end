import * as S from "./styles";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Trending from "../../components/Trending"
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../../providers/DataContext";
import LoadingPage from '../../components/LoadingPage';
import axios from "axios";


export default function TimelineUser() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false)
    const [publish, setPublish] = useState(false);
    const [following, setFollowing] = useState(false);
    const { data, setData} = useContext(DataContext);
    const navigate = useNavigate()
    const API = data.API;

    const { id } = useParams();
    
    useEffect(() => {
      const token = localStorage.getItem("token").split(".")[1];
      if (!token) navigate("/signin");
      let user = window.atob(token);
      const { picture, id, username } = JSON.parse(user);

      setData({ ...data, user: { id, picture, username }, token: token });
    }, []);

    useEffect(() => {
      reloadData();       
    }, [publish, id])

    function warning() {
        alert("An error occured while trying to fetch the posts, please refresh the page");
    }

    function reloadData() {
        let request = null;
        setLoad(false);
        setPosts([]);
        request = axios.get(`${API}/user/${id}`);

        request.then((response) => {
          const { data } = response;
          if (data[0]) setUser(data[0]);
          if (data[1]) setPosts(data[1]);
          console.log(data[0]);
          console.log(data[0].username);
          setLoad(true);
         });
         request.catch(warning);
    }

    const tag = posts.length === 0 ? "There are no posts yet" : "";
    const img = user.length !== 0 ? <img src={user.picture} alt="user"></img> : "";
    const username = user.length !== 0 ? `${user.username}'s posts` : "User doesn't exist";

    if (!load) {
        return (
          <S.ContainerUser>
            <S.Division>
              <S.PostsColumnUser>
                <S.LoaderUser>
                  <LoadingPage />
                </S.LoaderUser>
              </S.PostsColumnUser>
            </S.Division>
            <Trending />
          </S.ContainerUser>
        );
    } else {
        return (
          <>
            <Header picture={data.user.picture} />
            <S.ContainerUser>
              <S.H2User>
                <S.UserInfo>
                  <div>
                    {img} <h2>{username}</h2>
                  </div>
                  <S.Follow>{following ? "Seguindo" : "Seguir"}</S.Follow>
                </S.UserInfo>
              </S.H2User>
                <S.Division>
                <S.PostsColumnUser>
                  <h5>{tag}</h5>
                  {posts.length !== 0 &&
                    posts.map((post, index) => {
                      return (
                        <Posts
                          postId={post.id}
                          key={post.username + post.description + index}
                          name={post.username}
                          picture={post.picture}
                          link={post.link}
                          description={post.description}
                          linkDescription={post.linkDescription}
                          linkTitle={post.linkTitle}
                          linkPicture={post.linkPicture}
                          originalPost={post.originalPost}
                          reposterName={post.reposterName}
                          redirect={(val) => {
                            val = val.replace("#", "");
                            navigate(`/hashtag/${val}`);
                          }}
                          reloadPosts={reloadData}
                        />
                      );
                    })}
                </S.PostsColumnUser>
                <Trending
                  redirect={(val) => {
                    val = val.replace("#", "");
                    navigate(`/hashtag/${val}`);
                  }}
                />
                </S.Division>
            </S.ContainerUser>
          </>
        );
    }
}