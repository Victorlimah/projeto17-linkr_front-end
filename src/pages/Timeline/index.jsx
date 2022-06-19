import * as S from "./styles";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../providers/DataContext";
import axios from "axios";


export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const [publish, setPublish] = useState(false);
    const [load, setLoad] = useState(false)
    const [count, setCount] = useState(0)
    const { data, setData } = useContext(DataContext);
    const navigate = useNavigate()
    const API = data.API;

    useEffect(() => {
      const token = localStorage.getItem('token').split('.')[1];
      if(!token) navigate('/signin');
      let user = window.atob(token);
      const { picture, id, username } = JSON.parse(user);

      setData({...data, user:{ id, picture, username }});
    }, [])

    useEffect( async () => {
        setLoad(false)
        const request = axios.get(`${API}/timeline`);
        request.then(response => {
            const { data } = response;
            setPosts(data);
            setCount(count + 1)
            setLoad(true)
        })
        request.catch(warning)
    }, [publish])

    function warning() {
        alert("An error occured while trying to fetch the posts, please refresh the page");
    }

    async function reloadPosts() {
        setLoad(false)
        const request = axios.get(`${API}/timeline`);
        request.then(response => {
            const { data } = response;
            setPosts(data);
            setCount(count + 1)
            setLoad(true)
        })
        request.catch(warning)
    }

    if (!load) {
        return (
            <S.Container>
                <S.PostsColumn>
                    <S.Loader>
                        <h1>Loading</h1>
                    </S.Loader>
                </S.PostsColumn>    
            </S.Container>
        )
    } else if (posts.length === 0) {
        return (
            <S.Container>
                <S.PostsColumn>
                    <Header picture={data.user.picture} />
                    <S.H2>timeline</S.H2>
                    <NewPost
                        publish={publish}
                        setPublish={setPublish}
                    />
                    <h5>There are no posts yet</h5>
                </S.PostsColumn>
            </S.Container>
        )
    } else {
        return (
            <S.Container>
                <S.PostsColumn>
                    <Header picture={data.user.picture} />
                    <S.H2>timeline</S.H2>
                    <NewPost
                        publish={publish}
                        setPublish={setPublish}
                    />
                    {posts.map((post, index) => {
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
                                redirect={(val) => {
                                    val = val.replace("#", "")
                                    navigate(`/hashtag/${val}`)
                                }}
                                reloadPosts={reloadPosts}
                                />
                        )
                    })}
                </S.PostsColumn>
            </S.Container>
        )
    }
}