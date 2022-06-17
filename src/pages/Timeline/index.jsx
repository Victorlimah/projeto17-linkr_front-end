import * as S from "./styles";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";
import LoadingPosts from '../../components/LoadingTimeline';
import { useState, useEffect, useContext } from "react";
import DataContext from "../../providers/DataContext";
import axios from "axios";

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const [publish, setPublish] = useState(false);
    const [count, setCount] = useState(0)
    const { data } = useContext(DataContext);
    const API = data.API;

    useEffect(() => {
        const request = axios.get(`${API}/timeline`);

        request.then(response => {
            const { data } = response;
            console.log(data)
            setPosts(data);
            setCount(count + 1)
        })
        request.catch(warning)
    }, [publish])

    function warning() {
        alert("An error occured while trying to fetch the posts, please refresh the page");
    }

    if (posts.length === 0) {
        return (
            <S.Container>
                <S.PostsColumn>
                    <S.Loader>
                        <LoadingPosts />
                    </S.Loader>
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