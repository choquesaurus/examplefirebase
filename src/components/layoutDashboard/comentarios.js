import React,{useEffect} from "react";
import { database } from "../../firebase/init";
import { TextField, Container, Button } from "@material-ui/core";
import swalert from "sweetalert";
import CardComentarios from "./cardcomentarios"
import Helmet from "react-helmet";
<Helmet>
<meta name="description" content="Componente principal(Dashboard)" />
<title>BCPNotify | Dashboard</title>
</Helmet>
export default function Comentarios() {
  const emailLocalStorage = window.localStorage.getItem("email"); 
  const [Post, setPost] = React.useState({
    title: "",
    body: "",
    image: "",
  });
  const [Publicaciones,SetPublicaciones] = React.useState([])
  useEffect(()=>{
    (()=>{
      database
      .collection("users")
      .doc(emailLocalStorage)
      .collection("posts").onSnapshot(snapshot=>{
        const data =snapshot.docs.map(item=>Object.assign({},{id:item.id,...item.data()}))
        SetPublicaciones(data)
        //console.log(data)
      })
    })()
  },[emailLocalStorage])

  const addPost = () => {
    database
      .collection("users")
      .doc(emailLocalStorage)
      .collection("posts")
      .add({
        date:new Date().toLocaleString(),
        ...Post
      })
      .then((value) =>{
      setPost({
        date: "",
        title: "",
        body: "",
        image: "",
      })
        swalert("Hey!", "Se agrego correctamente la publicación ", "success")
    })
      .catch((error) =>
        swalert("Hey!", `Hay un error ${error.message}`, "error")
      );
  };
  const changePost = (event) => {
    setPost({
      ...Post,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
    <Helmet>
<meta name="comentarios" content="Componente comentarios(Dashboard)" />
<title>Parcial | Comentarios</title>
</Helmet>
      <Container>
        <br />
        <TextField
          id="standard-basicwqe"
          label="Titulo"
          size="medium"
          name="title"
          onChange={changePost}
        />
        <br />
        <TextField
          id="standard-basic2"
          label="Imagen url"
          size="medium"
          name="image"
          onChange={changePost}
        />
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Descripcion"
          name="body"
          multiline
          rows={6}
          defaultValue="Default Value"
          variant="outlined"
          onChange={changePost}
        />
        <br /> <br />
        <Button variant="contained" color="primary" onClick={addPost}>
          Publicar
        </Button>
        <br/>
        <CardComentarios data={Publicaciones}/>
      </Container>
    </>
  );
}
