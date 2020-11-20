import React, { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import { auth } from "../../firebase/init";
import ContextoDashboard from "./contextodashboard"
export default function LayoutDashboard() {
  const [user,setUser] = useState({
      displayName:"",
      email:"",
      photoURL:""
  })
  useEffect(() => {
    (() => {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          console.log("Sesión abierta");
          const {
            displayName,
            email,
            uid,
            photoURL = "https://i1.wp.com/norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png?ssl=1",
          } = user;
          const data = {
            displayName,
            email,
            uid,
            photoURL,
          };
          setUser(data)
        } else {
          window.location.href = "https://desweb.choquesaurus.com/";
          console.log("Sesión cerrada");
        }
      });
    })();
  }, []);
  return (
    <>
      <NavBar photo={user.photoURL}/>
      <ContextoDashboard.Provider value={{user}}>
      <Outlet />
      </ContextoDashboard.Provider>
     
    </>
  );
}
