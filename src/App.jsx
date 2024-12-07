import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import DetalleBlog from './pages/home/DetalleBlog';
import Header from './components/Header';
import Footer from './components/Footer';
import {AuthProvider} from './context/AuthContext';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import CrearBlog from './pages/crear-blog/CrearBlog';
import MisBlogs from './pages/mis-blogs/MisBlogs';  
import  ModificarBlog from './pages/modificar-blog/ModificarBlog';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>} /> {/*consultar todos los blogs, que tengan estado habilitado*/}
          <Route path="/blogs/:id" element={<DetalleBlog/>} />  {/*consultar blog por id*/}
          <Route path="/crear-blog" element={<CrearBlog/>} /> {/*formulario para crear blog*/}

          <Route path="/modificar-blog/:idblog" element={<ModificarBlog/>} /> {/*formulario para modificar blog*/}
          {/*<Route path="/eliminar-blog/:idblog" element={<eliminarBlog/>} />*/}
          {/*borrado fisico de la BD, borrado logico cambiamos un estado*/}
          <Route path="/mis-blogs/" element={<MisBlogs/>} />  {/*listar mis blogs o tarjetas deacuerdo al ide de usuario de session*/}
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
