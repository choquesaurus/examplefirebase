import React,{useContext} from "react"
import ContextoDashboard from "./contextodashboard"
import {TextField} from  "@material-ui/core"
import Helmet from "react-helmet";

export default function DetailUser(){
    const {user:usercontext}=useContext(ContextoDashboard)
   
return (<>   <Helmet>
  <meta name="detalle" content="Componente detalle(Dashboard)" />
  <title>Parcial | Detalle</title>
  </Helmet>
  detalle de usuario 
<br/>
  <TextField id="standard-basic" label="Standard" value={usercontext.email?usercontext.email:"Loading . . ."}/><br/>
  <TextField id="standard-basic2" label="Standard" value={usercontext.displayName?usercontext.displayName:"Loading . . ."} />

</>)
}