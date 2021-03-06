import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Posts from './components/posts/Posts'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/posts' element={<Posts />} />
                  </Routes>
            </Router>
    </div>
  );
}

export default App;
