import * as S from "./styles";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";
import LoadingPage from '../../components/LoadingPage';
import Trending from "../../components/Trending"
import Footer from "../../components/Footer"
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useInterval from "use-interval";
import DataContext from "../../providers/DataContext";
import InfiniteScroll from 'react-infinite-scroller';
import axios from "axios";

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const [publish, setPublish] = useState(false);
    const [load, setLoad] = useState(false)
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")
    const [showFooter, setShowFooter] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [morePosts, setMorePosts] = useState(true)
    const [observeAPI, setObserveAPI] = useState(null)
    const { data, setData } = useContext(DataContext);
    const navigate = useNavigate()
    const API = data.API;
    const token = localStorage.getItem('token').split('.')[1];

    useEffect(async () => {
        if (!token) navigate('/signin');
        let user = window.atob(token);
        const { picture, id, username } = JSON.parse(user);
        setData({ ...data, user: { id, picture, username }, token: token });
        setLoad(false)
        const request = axios.get(`${API}/timeline/${id}?page=${currentPage}`);
        request.then(response => {
            const { data } = response;
            if (data === "You don't follow anyone yet. Search for new friends!") {
                setMessage("You don't follow anyone yet. Search for new friends!");
                setPosts([]);
            }
            if (data === "No posts found from your friends") {
                setMessage("No posts found from your friends");
                setPosts([]);
            }
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
        let user = window.atob(token);
        const {id} = JSON.parse(user);
        const request = axios.get(`${API}/timeline/${id}`);
        request.then(response => {
            const { data } = response;
            setPosts(data);
            setCount(count + 1)
            setLoad(true)
        })
        request.catch(warning)
    }

    async function loadMorePosts() {
        setShowFooter(false)
        const request = axios.get(`${API}/timeline/${data.user.id}?page=${currentPage}`);
        request.then(response => {
            const { data } = response;
            if(data.length === 0){
                setMorePosts(false)
            }
            setShowFooter(true)
            setCurrentPage(currentPage + 1)
            setPosts([...posts, ...data]);
        })
        request.catch(warning)
    }

    useInterval(() => {
        const request = axios.get(`${API}/new/${data.user.id}`);
        request.then(response => {
            const { data } = response;
            if(observeAPI === null){
                setObserveAPI(data.length)
            }
            else if(data.length > observeAPI){
                alert(`There are ${data.length - observeAPI} new posts`)
                setObserveAPI(data.length)
                setPublish(true)
            } 
        })
        request.catch(warning)
    }, 20000)

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
    } else if (message !== "") {
        return (
            <S.Container>
                <S.PostsColumn>
                    <Header picture={data.user.picture} />
                    <S.H2>
                        <h2>timeline</h2>
                    </S.H2>
                    <NewPost publish={publish} setPublish={setPublish} />
                    <h5>{message}</h5>
                </S.PostsColumn>
                <Trending redirect={(val) => {
                    val = val.replace("#", "")
                    navigate(`/hashtag/${val}`)
                }} />
            </S.Container>
        );
    }
    else if (posts.length !== 0) {
        return (
            <S.Container>
                <S.Wrapper>
                    <S.PostsColumn>
                        <Header picture={data.user.picture} />
                        <S.H2>timeline</S.H2>
                        <NewPost
                            publish={publish}
                            setPublish={setPublish}
                        />
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={loadMorePosts}
                            hasMore={morePosts}
                            useWindow={true}
                        >
                            {posts.map((post, index) => {
                                return (
                                    <Posts
                                        postId={post.id}
                                        idPoster={post.publisher}
                                        key={post.username + post.description + index}
                                        name={post.username}
                                        picture={post.picture}
                                        link={post.link}
                                        description={post.description}
                                        originalPost={post.originalPost}
                                        reposterName={post.reposterName}
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
                        </InfiniteScroll>
                    </S.PostsColumn >
                    <Trending redirect={(val) => {
                        val = val.replace("#", "")
                        navigate(`/hashtag/${val}`)
                    }} />
                </S.Wrapper>
                <Footer setShowFooter={setShowFooter} showFooter={showFooter} />
            </S.Container>
        )
    }
}