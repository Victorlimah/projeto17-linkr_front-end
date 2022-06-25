import * as S from "./styles";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Trending from "../../components/Trending"
import Footer from "../../components/Footer"
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../../providers/DataContext";
import LoadingPage from '../../components/LoadingPage';
import InfiniteScroll from 'react-infinite-scroller';
import axios from "axios";


export default function TimelineUser() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false)
    const [publish, setPublish] = useState(false);
    const [showFooter, setShowFooter] = useState(true)
    const [disabled, setDisabled] = useState(false);
    const [following, setFollowing] = useState(false);
    const [morePosts, setMorePosts] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const { data, setData } = useContext(DataContext);
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

    function warningFollow() {
        alert("An error occured during the process!");
    }

    function reloadData() {
        let request = null;
        setLoad(false);
        setPosts([]);
        request = axios.get(`${API}/user/${id}?page=${currentPage}`);

        request.then((response) => {
            const { data } = response;
            if (data[0]) setUser(data[0]);
            if (data[1]) setPosts(data[1]);
            setLoad(true);
        });
        request.catch(warning);

        verifyFollower();
    }

    function verifyFollower() {
        let request = null;
        setLoad(false);
        request = axios.post(`${API}/follow/`, { following: id, follower: data.user.id });
        if (Number(id) !== data.user.id) {
            request.then((response) => {
                const { data } = response;
                if (data) setFollowing(data);
                setLoad(true);
            });
            request.catch(warningFollow);
        }
    }

    function followingUser() {
        setDisabled(true);
        let request = null;
        request = axios.post(`${API}/follow-user`, { following: id, follower: data.user.id });
        request.then((response) => {
            const { data } = response;
            if (data) setFollowing(!following);
            setDisabled(false);
        });
        request.catch(warningFollow);
    }

    async function loadMorePosts() {
        setShowFooter(false)
        setMorePosts(false)
        const request = axios.get(`${API}/timeline/${data.user.id}?page=${currentPage}`);
        request.then(response => {
            const { data } = response;
            setCurrentPage(currentPage + 1)
            setPosts([...posts, ...data]);
            setShowFooter(true)
            setMorePosts(false)
        })
        request.catch(warning)
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
                            {following ? <S.Follow following={following} className="follow-not-selected"
                                isUser={Number(id) === data.user.id} disabled={disabled}
                                onClick={() => {
                                    followingUser();
                                }}>Unfollow</S.Follow> : <S.Follow following={following} className="follow-selected"
                                    isUser={Number(id) === data.user.id ||  user.length === 0} disabled={disabled}
                                    onClick={() => {
                                        followingUser();
                                    }}>Follow</S.Follow>}
                        </S.UserInfo>
                    </S.H2User>
                    <S.Division>
                        <S.PostsColumnUser>
                            <h5>{tag}</h5>
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={loadMorePosts}
                                hasMore={morePosts}
                                useWindow={true}
                            >
                                {posts.length !== 0 &&
                                    posts.map((post, index) => {
                                        return (
                                            <Posts
                                                postId={post.id}
                                                idPoster={post.publisher}
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
                            </InfiniteScroll>
                        </S.PostsColumnUser>
                        <Trending
                            redirect={(val) => {
                                val = val.replace("#", "");
                                navigate(`/hashtag/${val}`);
                            }}
                        />
                    </S.Division>
                    <Footer setShowFooter={setShowFooter} showFooter={showFooter} />
                </S.ContainerUser>
            </>
        );
    }
}