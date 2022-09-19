import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Posts from './components/posts/Posts'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Post from './components/posts/Post';
// import MyPosts from './components/posts/MyPosts';
import Layout from './components/Layout';
import SingleUser from './components/users/SingleUser'
import SingleUserPost from './components/users/SingleUserPost'
import EditPost from './components/posts/EditPost';


function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path='/' element={<Layout />}>
                        <Route path='/post' element={<Post />} />
                      <Route path='post/:id' element={<SingleUserPost />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/moodboard/user/:id' element={<SingleUser  />} />
                        <Route path='/post/editpost/:id' element={<EditPost />} />
                  </Route>
                  <Route index element={<SignUp/>} />
                  <Route path='/login' element={<Login />} />
                  
                </Routes>
            </Router>
    </div>
  );
}

export default App;
