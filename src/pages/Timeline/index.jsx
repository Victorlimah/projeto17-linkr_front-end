import * as S from "./styles";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";
import { useState, useEffect, useContext } from "react";
import DataContext from "../../providers/DataContext";
import LoadingPage from '../../components/LoadingPage';
import axios from "axios";

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(false)
    const [publish, setPublish] = useState(false);
    const { data } = useContext(DataContext);
    const API = data.API;

    useEffect(async () => {
        setLoad(false)
        const request = axios.get(`${API}/timeline`);
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
            <S.Container>
                <S.PostsColumn>
                    <S.Loader>
                        <LoadingPage />
                    </S.Loader>
                </S.PostsColumn>
            </S.Container>
        )
    } else if (posts.length === 0) {
        return (
            <S.Container>
                <Header picture={data.user.picture} />
                <S.H2>
                    <h2>timeline</h2>
                </S.H2>
                <S.PostsColumn>
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
                <Header picture={data.user.picture} />
                <S.H2>
                    <h2>timeline</h2>
                </S.H2>
                <S.PostsColumn>
                    <NewPost
                        publish={publish}
                        setPublish={setPublish}
                    />
                    {console.log(posts)}
                    {posts.map(post => {
                        return (
                            <Posts
                                name={post.username}
                                picture={post.picture}
                                link={post.link}
                                description={post.description}
                                linkDescription={post.linkDescription}
                                linkTitle={post.linkTitle}
                                linkPicture={post.linkPicture} />
                        )
                    })}
                </S.PostsColumn>
            </S.Container>
        )
    }
}