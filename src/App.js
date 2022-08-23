import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
       <h2>React Nested Routes</h2>
       <Header></Header>
       <Routes>
           <Route path="/" element={<Home/>}></Route>

           <Route path="/post" element={<Post/>}>
                  <Route path=":postId" element={<PostDetail/>}></Route>
           </Route>

       </Routes>
    </div>
  );
}

export default App;
