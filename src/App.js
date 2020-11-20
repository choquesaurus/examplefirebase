// import logo from './logo.svg';
import "./App.css";
import "./firebase/init";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/baseapp/signin";
import LayoutDashboard from "./components/layoutDashboard/layout";
import DetailUser from "./components/layoutDashboard/detailuser";
import Error from "./components/error";
import Archivos from "./components/layoutDashboard/archivos"
import Comentarios from "./components/layoutDashboard/comentarios"
function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/app" element={<LayoutDashboard />}>
          <Route path="/" element={<DetailUser />} />
          <Route path="/file" element={<Archivos />} />
          <Route path="/comment" element={<Comentarios />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
