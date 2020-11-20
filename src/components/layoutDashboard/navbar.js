import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import  {Avatar} from  "@material-ui/core"
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { auth } from "../../firebase/init";
import swet from "sweetalert"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({photo}) {
  const classes = useStyles();
const CloseSession=()=>{
    auth.signOut().then(function() {
        window.localStorage.clear()
        window.location.href="https://desweb.choquesaurus.com/"
        //swet("Cerrar Sesión","Acabas de cerrar sesión satisfactoriamente ","info")
     
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        swet("Existe un error",error.message,"error")
     
      });
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography component="span" variant="h6" className={classes.title}>
            <Link style={{color:"white",textDecoration:"none"}} to='/app'>Parcial</Link> 
          </Typography>
          <Link  to="/app/file"  style={{
              padding:"5px",
              backgroundColor:"white",
              borderRadius:"5px"
          }} >
            Subir Archivos
          </Link>   &nbsp;
          <Link  to="/app/comment"  style={{
              padding:"5px",
              backgroundColor:"white",
              borderRadius:"5px"
          }} >
            Subir Comentarios
          </Link>
          &nbsp;
          {/* <Link to="/" style={{
              padding:"5px 15px",
              backgroundColor:"white",
              borderRadius:"5px"
          }}>
            Mi perfil
          </Link> */}
          &nbsp;
          <Button color="secondary" onClick={CloseSession} variant="contained" >
            Salir
          </Button>
          &nbsp;
          <Avatar alt="Remy Sharp" src={photo?photo:"Loading ..."} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
