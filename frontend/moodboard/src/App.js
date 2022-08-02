import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Posts from './components/posts/Posts'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Post from './components/posts/Post';
import MyPosts from './components/posts/MyPosts';
import Layout from './components/Layout';

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path='/' element={<Layout />}>
                        <Route path='/post' element={<Post />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/post/:id' element={<MyPosts />} />
                  </Route>
                  <Route index element={<Home/>} />
                  <Route path='/login' element={<Login />} />
                  
                </Routes>
            </Router>
    </div>
  );
}

export default App;
