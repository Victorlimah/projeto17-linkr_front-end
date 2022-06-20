import * as S from "./styles";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
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
    const { data } = useContext(DataContext);
    const navigate = useNavigate()
    const API = data.API;

    const { id } = useParams();

    useEffect(() => {
        let request = null;
        setLoad(false)

        request = axios.get(`${API}/user/${id}`);

        request.then(response => {
            const { data } = response;
            if(data[1]) setPosts(data[1]);
            if(data[0]) setUser(data[0]);
            setLoad(true);
        })
        request.catch(warning)
    }, [publish, id])

    function warning() {
        alert("An error occured while trying to fetch the posts, please refresh the page");
    }

    const tag = posts.length === 0 ? "There are no posts yet" : "";
    const img = user.length !== 0 ? <img src={user.picture} alt="user"></img> : "";
    const username = user.length !== 0 ? `${user.username}'s posts` : "User doesn't exist";

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
    } else {
        return (
            <S.ContainerUser>
                <Header picture={data.user.picture} />
                <S.H2User>
                    <S.UserInfo>
                        {img}
                        <h2>{username}</h2>
                    </S.UserInfo>
                </S.H2User>
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