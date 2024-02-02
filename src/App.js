import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Component/Menu/Menu';
import Posts from './Component/Posts/Posts';
import { Routes, Route } from "react-router-dom"
import Comment from './Component/Comment/Comment';
import Album from './Component/Album/Album';
import Todos from './Component/Todos/Todos';
import Photos from './Component/Photos/Photos';
import Users from './Component/Users/Users';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path="/post" element={<Posts/>} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/album" element={<Album/>} />
        <Route path="/todos" element={ <Todos/> } />
        <Route path="/photo" element={ <Photos/> } />
        <Route path="/users" element={ <Users/> } />






      </Routes>
    </div>
  );
}

export default App;
