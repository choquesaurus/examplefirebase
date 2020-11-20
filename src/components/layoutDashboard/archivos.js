import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { storage, database } from "../../firebase/init";
import DataGridArchivos from "./datagridarchivos";
//import UsuarioContexto from "./contextodashboard";
//import firebase from "firebase/app"
import swalert from "sweetalert";
import Helmet from "react-helmet";

export default function Archivos() {
  const emailLocalStorage = window.localStorage.getItem("email");
  const [File, setFile] = React.useState({});
  const [DataFiles, setDataFiles] = React.useState([]);
  const refProgress = React.useRef();
  //const UsuarioContext = React.useContext(UsuarioContexto);
  let storageRef = storage.ref("parcial_files/");
  useEffect(() => {
    (async () => {
      //console.log(UsuarioContext.user)
      //if(auth.currentUser && auth.currentUser.email!=null && auth.currentUser.email.length>0){
      //if(auth.currentUser && auth.currentUser.email != null){
      database
        .collection("users")
        .doc(emailLocalStorage)
        .collection("datafiles")
        .orderBy("date", "desc")
        .onSnapshot((doc) => {
          //console.log("hola ",doc.data().values)
          // console.log(doc.data())
          const data = doc.docs.map((item) =>
            Object.assign({}, { id: item.id, ...item.data() })
          );
          setDataFiles(data);
          //console.log(data)
        });
      //}
    })();
  }, [emailLocalStorage]);
  const FileUpload = (e) => {
    e.preventDefault();
    const task = storageRef.child(File.name).put(File);
    task.on(
      "state_changed",
      function progress(snapshot) {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        refProgress.current.value = percentage;
      },
      function error(err) {
        swalert("Hey!", `Sucedio un error : ${err.message}`, "error");
        console.log(err);
      },
      async function complete() {
        const url = await task.snapshot.ref.getDownloadURL(); //snapshot.ref.getDownloadURL();
        await database
          .collection("users")
          .doc(emailLocalStorage)
          .collection("datafiles")
          .add({
            date: new Date().toLocaleString(),
            name: File.name,
            link: url,
            //data_user:{...UsuarioContext}
          });
        //setDataFiles(ArrFiles)
        swalert("Hey!", "Se subió correctamente el archivo ", "success");
        //console.log("Uploaded a blob or file!", url);
      }
    );
    // .then(async function (snapshot) {
    //   const url = await snapshot.ref.getDownloadURL();
    //   database.collection("users").doc(emailLocalStorage).collection("datafiles").add({
    //       date:new Date().toLocaleString(),
    //       link:url
    //     //data_user:{...UsuarioContext}
    //   })
    //   //setDataFiles(ArrFiles)
    //   swalert("Hey!","Se subió correctamente el archivo ","success")
    //   //console.log("Uploaded a blob or file!", url);
    // })
    // .catch((err) => console.log(err.message));
  };
  const ChangeFile = (event) => {
    const file_data = event.target.files[0];
    setFile(file_data);
    
  };

  return (
    <>
      <Helmet>
        <meta name="Archivos" content="Componente archivos(Dashboard)" />
        <title>Parcial | Archivos</title>
      </Helmet>
      <Container>
        <br />
        <form onSubmit={FileUpload} method="POST" encType="multipart/form-data">
          <progress value="0" max="100" ref={refProgress}>
            0%
          </progress>
          <br />
          <input type="file" name="archivo" onChange={ChangeFile} />
          <button type="submit">Subir Archivo :D </button>
        </form>

        <DataGridArchivos data={DataFiles} />
      </Container>
    </>
  );
}
