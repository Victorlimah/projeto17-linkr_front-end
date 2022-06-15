import * as S from "./styles";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Posts from "../../components/Posts";
import { useState, useEffect, useContext } from "react";
import DataContext from "../../providers/DataContext";
import axios from "axios";

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const [publish, setPublish] = useState(false);
    const { data } = useContext(DataContext);
    const API = data.API;

    useEffect(() => {
        const request = axios.get(`${API}/timeline`);

        request.then(response => {
            const { data } = response;
            setPosts(...data);
        })
        request.catch(() => {
            alert("An error occured while trying to fetch the posts, please refresh the page")
        })
    })

    
    return (
        <S.Container>
            <S.PostsColumn>
                <Header />
                <S.H2>timeline</S.H2>
                <NewPost publish={publish} setPublish={setPublish}/>
                {posts.map(item => {
                    return (
                        <Posts name={item.name} picture={item.picture} link={item.link} description={item.description} />
                    )
                })}
            </S.PostsColumn>
        </S.Container>
    )
}