import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import DetalleBlog from './pages/home/DetalleBlog';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs/:id' element={<DetalleBlog/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default App;
