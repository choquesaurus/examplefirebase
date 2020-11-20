import React,{useEffect} from "react";
import firebase from "firebase/app"
import { auth } from "../../firebase/init";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import swet from "sweetalert"
//import {Navigate} from  "react-router-dom"
import GTranslateIcon from '@material-ui/icons/GTranslate';
import Helmet from "react-helmet";

//import { DesktopWindows } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
export default function Signin()  {
    useEffect(()=>{
        (()=>{
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    console.log("Sesión abierta")
                    window.location.href="https://desweb.choquesaurus.com/app" 
                //   // User is signed in.
                //   var displayName = user.displayName;
                //   var email = user.email;
                //   var emailVerified = user.emailVerified;
                //   var photoURL = user.photoURL;
                //   var isAnonymous = user.isAnonymous;
                //   var uid = user.uid;
                //   var providerData = user.providerData;
                // ...
                } else {
                    //window.location.href="http://localhost:3000/"
                  // User is signed out.
                  // ...
                  console.log("Sesión cerrada")
                }
              });
        })()
    },[])
   
      
    const classes = useStyles();
    
const GoGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        //if(result.user)
        window.localStorage.setItem("email",result.user.email)
        window.location.href="https://desweb.choquesaurus.com/app"
        // const {displayName,email,uid,photoURL="https://i1.wp.com/norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png?ssl=1"} = result.user
        // const data={
        //     displayName,
        //     email,
        //     uid,
        //     photoURL
        // }

        //var providerData = result.user.providerData;
        //console.log("DATA USER ",data)
      }).catch(function(error) {
        // Handle Errors here.
       let errorCode = error.code;
       swet("Existe un error",errorCode,"error")
      });
}
  return (
    <>
       <Helmet>
        <meta name="Iniciar" content="Componente Iniciar sesión(Dashboard)" />
        <title>Parcial | Iniciar</title>
      </Helmet>
      <div>
      <Button
        variant="contained"
        color="primary"
        onClick={GoGoogle}
        className={classes.button}
        startIcon={<GTranslateIcon />}
      >
        Iniciar con google
      </Button>
      </div>
    </>
  );
};
