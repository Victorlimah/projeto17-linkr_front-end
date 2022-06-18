import * as S from "./styles";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../providers/DataContext";
import LoadingPage from '../../components/LoadingPage';
import axios from "axios";


export default function TimelineUser() {
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(false)
    const [publish, setPublish] = useState(false);
    const { data, id } = useContext(DataContext);
    const navigate = useNavigate()
    const API = data.API;

    useEffect(async () => {
        setLoad(false)
        const request = axios.get(`${API}/user/${id}`);
        request.then(response => {
            const { data } = response;
            setPosts(data);
            setLoad(true);
        })
        request.catch(warning)
    }, [publish])

    function warning() {
        alert("An error occured while trying to fetch the posts, please refresh the page");
    }

    if (!load) {
        return (
            <S.ContainerUser>
                <S.PostsColumnUser>
                    <S.LoaderUser>
                        <LoadingPage />
                    </S.LoaderUser>
                </S.PostsColumnUser>
            </S.ContainerUser>
        )
    } else if (posts.length === 0) {
        return (
            <S.ContainerUser>
                <Header picture={data.user.picture} />
                <S.H2User>
                    <S.UserInfo>
                        <img src={posts[0].picture} alt="user"></img>
                        <h2>{posts[0].username}'s posts</h2>
                    </S.UserInfo>
                </S.H2User>
                <S.PostsColumnUser>
                    <h5>There are no posts yet</h5>
                </S.PostsColumnUser>
            </S.ContainerUser>
        )
    } else {
        return (
            <S.ContainerUser>
                <Header picture={data.user.picture} />
                <S.H2User>
                    <S.UserInfo>
                        <img src={posts[0].picture} alt="user"></img>
                        <h2>{posts[0].username}'s posts</h2>
                    </S.UserInfo>
                </S.H2User>
                <S.PostsColumnUser>
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
                            />
                        )
                    })}
                </S.PostsColumnUser>
            </S.ContainerUser>
        )
    }
}