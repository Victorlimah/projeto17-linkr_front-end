import * as S from "./styles";
import { useState, useContext, useEffect, useRef } from "react";
import ReactHashtag from "@mdnm/react-hashtag";
import { AiOutlineHeart } from "react-icons/ai/";
import { AiFillHeart } from "react-icons/ai/";
import Loading from "../../components/Loading"
import DataContext from "../../providers/DataContext";
import axios from "axios";
import { Tooltip } from "@mui/material";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

export default function Posts(props) {
    const { postId, name, picture, link, description, linkDescription, linkTitle, linkPicture, redirect, reloadPosts, originalPost, reposterName } = props;
    const photo = "data:image/png;base64,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"
    const [ liked, setLiked ] = useState(false);
    const [ names, setNames ] = useState([]);
    const [ userId, setUserId ] = useState(0)
    const [puting, setPuting] = useState(false)
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState({ description: "", comment:"" })
    const [modalIsVisible, setModalVisibility] = useState(false);
    const [repostModalIsVisible, setRepostModalVisibility] = useState(false);
    const { data } = useContext(DataContext);
    const API = data.API;
    const username = data.user.username;
    const inputRef = useRef();
    const navigate = useNavigate();

    const [postCount, setPostCount] = useState({likes: 0, reposts: 0, comments: 0});
    const [comments, setComments] = useState([]);
    const [ following, setFollowing ] = useState([]);
    const [showComments, setShowComments] = useState(false);

    // TODO: a prop abaixo deve vim da requisição de /timeline
    const idPoster = 7

  useEffect(() => {
    async function checkLiked() {
      const request = originalPost ?
      await axios.post(`${API}/checkLiked`, { username, postId: originalPost }) 
      :
      await axios.post(`${API}/checkLiked`, { username, postId })
      
      const { data } = request;
      setLiked(data.liked);
      setPostCount({ ...postCount, likes: data.likes, comments: data.comments, reposts: data.reposts });
      setComments(data.listComments);
      console.log(data.following)
      setFollowing(data.following);

      if (data.liked && data.likes === 1) setNames([{ userName: "Você" }]);
      else setNames(data.names);  
    }

    async function checkUserId() {
      const request = await axios.get(`${API}/publication/${postId}`)
      setUserId(request.data.userId)
    }

    checkUserId();
    checkLiked();
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function RenderIcons() {
    if (!userId) return <></>

    if ((data.user.id === userId && !originalPost) || reposterName === data.user.username) {
      //the icons´ css are included into the global css
      return (
        <>
          <BsPencilFill className="pencil-icone" onClick={renderizeInput}></BsPencilFill>
          <RiDeleteBin7Fill className="trash-icone" onClick={openCloseDeleteModal} ></RiDeleteBin7Fill>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }

  async function like() {
    //TODO: remover o onClick do botão de curtir
    if(originalPost) return
    const request = await axios.post(`${API}/like`, { username, postId });
    const { data } = request;
    setLiked(data.liked);
    setPostCount({ ...postCount, likes: data.likes})
    setNames(data.names);
  }

  async function unlike() {
    //TODO: remover o onClick do botão de descurtir
    if(originalPost) return
    const request = await axios.post(`${API}/unlike`, { username, postId });
    const { data } = request;
    setLiked(data.liked);
    setPostCount({ ...postCount, likes: data.likes})
    setNames(data.names);
  }

  function renderNames() {
    let text = liked ? "Você" : "Ninguém curtiu ainda";
    let count = liked ? postCount.likes - 1 : postCount.likes;

    if (names.length === 1 && liked)
      text = `Você e ${names[0].userName}`;
    else if (names.length === 1 && !liked)
      text = `${names[0].userName}`;
    else if (names.length === 2 && liked)
      text = `Você, ${names[0].userName} e ${names[1].userName}`;
    else if (names.length === 2 && !liked)
      text = `${names[0].userName} e ${names[1].userName}`;

    if (count - names.length > 1) {
      text = text.replace(" e", ",");
      text += ` e outras ${count - names.length} pessoas`;
    }
    else if (count - names.length > 0) text += ` e outra pessoa`;

    return text;
  }

  function renderizeInput() {
    setEdit(!edit);
  }

  async function sendText(e) {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        publicationId: postId,
      }
    }
    if (e.key === "Enter" || e.key === 13) {
      try {
        setPuting(true)
        await axios.put(`${API}/put-post`, editing, config)
        reloadPosts()
      } catch (e) {
        window.alert("An error occured while trying to update the post")
      }
    } 
    // Escape do jeito que está aqui só funciona em alguns navegadores
    if (e.key === "Escape" || e.key === 27) {
      setEdit(false)
      setEditing({...editing, description: ""})
    }
  }

  function openCloseDeleteModal() {
    setModalVisibility(!modalIsVisible);
  }

  function openCloseRepostModal() {
    if(originalPost) return
    setRepostModalVisibility(!repostModalIsVisible);
  }

  async function deletePost() {
    setLoading(!loading)
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        publicationId: postId,
      }
    }

    try {
      await axios.delete(`${API}/delete-post`, config)
      setLoading(!loading)
      reloadPosts()
    } catch (e) {
      setLoading(false)
      window.alert('Não foi possível excluir o post')
      openCloseDeleteModal()
      console.log(e, "erro no deletePost")
    }
  }

  function LoadButtons() {
    if(loading) {
      return (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      )
    }
    if(!loading) {
      return (
        <S.ButtonsContainer>
          <S.CancelButton onClick={openCloseDeleteModal}>
            <p>No, go back</p>
          </S.CancelButton>
          <S.DeleteButton onClick={deletePost}>
            <p>Yes, delete it</p>
          </S.DeleteButton>
        </S.ButtonsContainer>
      )
    }
  }

  function LoadRepostButtons() {
    if(loading) {
      return (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      )
    }
    if(!loading) {
      return (
        <S.ButtonsContainer>
          <S.CancelButton onClick={openCloseRepostModal}>
            <p>No, go back</p>
          </S.CancelButton>
          <S.DeleteButton onClick={repostPublication}>
            <p>Yes, repost it</p>
          </S.DeleteButton>
        </S.ButtonsContainer>
      )
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 'fit-content',
      width: 'fit-content',
      borderRadius: '50px',
      backgroundColor: 'transparent',
      border: '0'
    },
  };

  async function repostPublication() {
    setLoading(!loading)
    if(originalPost) return
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        publicationId: postId,
      }
    }
    //enviar todos os dados originais mais o reposterName
    const body = {url: link, description, reposterName: data.user.username, publicationId: postId}

    try {
      await axios.post(`${API}/repost`, body, config);
      setLoading(!loading)
      openCloseRepostModal()
    } catch(e) {
      setLoading(false)
      return console.log(e, "erro no repostPublication")
    }
  }

  function RenderWhenReposted() {
    if(originalPost) {
      return (
        <>
        <S.repostTagContainer>
          <BiRepost />
          <p>Re-posted by {reposterName}</p>
        </S.repostTagContainer>
        <S.repostTagContainer2>
        </S.repostTagContainer2>
      </>
      )
    } else {
      return <></>
    }
  }

  function openComments(){
    if(originalPost) return null;
    setShowComments(!showComments);
  }

  function RenderComments(){
    if (originalPost) return null;
    
    return (
      <>
        {comments.map(({ userName, picture, comment }, index) => {
         
          let details = "";
          if(name === userName) details = "• post’s author";
          else{
            for(let follow of following){
              if(follow.username === userName) details = "• following";
            }
          }

          return (
            <S.ContainerComments3 key={index}>
              <S.Comment>
                <img src={picture} alt="avatar" />
                <S.CommentsBody>
                  <S.CommentsHeader>
                    <S.CommentsName>{userName}</S.CommentsName>
                    <S.CommentsDetails>{details}</S.CommentsDetails>
                  </S.CommentsHeader>
                  <S.CommentsText>{comment}</S.CommentsText>
                </S.CommentsBody>
              </S.Comment>
            </S.ContainerComments3>
          );
        })}
       <MakeComment />
      </>
    );
  }

  function MakeComment(){
     return (
      <S.ContainerComments2>
        <S.ContainerComments>
          <S.Comment>
            <img src={data.user.picture} alt="avatar" />
            <S.CommentsBody>
              <input
                type="text"
                autoFocus={true}
                placeholder="Write a comment..."
                value={editing.comment}
                onChange={(e) =>
                  setEditing({ ...editing, comment: e.target.value })
                }
              />
              <FiSend onClick={() => postComment()} />
            </S.CommentsBody>
          </S.Comment>
        </S.ContainerComments>
      </S.ContainerComments2>
     );
   }

  async function postComment() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const body = { postId, username: data.user.username, comment: editing.comment };
    try {
      await axios.post(`${API}/comment`, body);
      reloadPosts();
    } catch (e) {
      console.log(e, "erro no postComment");
    }
  }

  return (
    <S.Container comment={showComments} comments={postCount.comments}>
      <RenderWhenReposted />
      <div>
        <S.UserPicture
          onClick={() => navigate(`/user/${idPoster}`)}
          src={picture}
        />
        <Tooltip title={renderNames()} arrow>
          <S.LikesContainer onClick={() => (liked ? unlike() : like())}>
            {liked ? <AiFillHeart color="#ff0000" /> : <AiOutlineHeart />}
            <p>{postCount.likes} likes</p>
          </S.LikesContainer>
        </Tooltip>
        <S.CommentsContainer onClick={() => openComments()}>
          <AiOutlineComment style={{ color: "white" }} />
          <p>{postCount.comments} comments</p>
        </S.CommentsContainer>
        <S.RepostsContainer
          onClick={() => {
            openCloseRepostModal();
          }}
        >
          <BiRepost style={{ color: "white" }} />
          <p>{postCount.reposts} reposts</p>
        </S.RepostsContainer>
      </div>
      {showComments ? <RenderComments /> : <></>}
      <RenderIcons />
      <S.PostBody>
        <h2 onClick={() => navigate(`/user/${idPoster}`)}>{name}</h2>
        {!edit ? (
          <p>
            <ReactHashtag onHashtagClick={(val) => redirect(val)}>
              {description}
            </ReactHashtag>
          </p>
        ) : (
          <S.InputEditing
            required
            type="text"
            ref={inputRef}
            value={description}
            disabled={puting}
            onKeyPress={(e) => sendText(e)}
            onChange={(e) =>
              setEditing({ ...editing, description: e.target.value })
            }
          ></S.InputEditing>
        )}
        <a href={link} target={link}>
          <S.linkCard>
            <h3>{linkTitle ? linkTitle : "Unknow title"}</h3>
            <p>{linkDescription}</p>
            <h4>{link}</h4>
            <img src={linkPicture ? linkPicture : photo} alt="Banner post" />
          </S.linkCard>
        </a>
      </S.PostBody>

      <Modal
        isOpen={modalIsVisible}
        onRequestClose={openCloseDeleteModal}
        style={customStyles}
        contentLabel="Delete Modal"
        appElement={document.getElementsByClassName("root")}
      >
        <S.ModalContainer>
          <h2>Are you sure you want to delete this post?</h2>
          <LoadButtons />
        </S.ModalContainer>
      </Modal>

      <Modal
        isOpen={repostModalIsVisible}
        onRequestClose={openCloseRepostModal}
        style={customStyles}
        contentLabel="Repost Modal"
        appElement={document.getElementsByClassName("root")}
      >
        <S.ModalContainer>
          <h2>Are you sure you want to repost this?</h2>
          <LoadRepostButtons />
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}