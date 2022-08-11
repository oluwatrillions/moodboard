import React, { useState, useRef, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { newUser, RegisterUser } from './features/registerSlice'

const Login = () => {
    const dispatch = useDispatch()
    const loggedUser = useSelector(RegisterUser)
    const navigate = useNavigate()

    const errRef = useRef()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errMsg, setErrMsg] = useState('')

       useEffect(() => {
        setErrMsg('')
    }, [username, password])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const loginBtn = await axios.post("http://localhost:4000/auth", {
                
                    user: username,
                    pwrd: password
            }).then((response) => {
                if (response.status === 200) {

                    return navigate('/posts')
                } 
            })
            console.log(loginBtn);
        } catch (error) {
            if (error.response.status === 401) {
                setErrMsg('Unauthorized: Please enter a valid username and password.')
                } else if (error.response.status === 400) {
                    setErrMsg('Bad request')
                } else {
                    setErrMsg('Internal error')
                }
            console.log(error);
        }
    }

  return (
      <div className='login'>
          <div className='login-section'>
              <section>
                  <h4 ref={errRef} className={errMsg ? 'errMsg' : 'noErrMsg'}>{errMsg}</h4>
                  <form>
                      <main>
                          <label htmlFor='username'>Username:</label>
                          <input type='text' name='username' value={username} onChange={((e)=> (setUsername(e.target.value)))} />
                      </main>
                      <main>
                          <label htmlFor='password'>Password:</label>
                          <input type='password' name='password' value={password} onChange={((e)=> (setPassword(e.target.value)))}/>
                      </main>
                  </form>
                  <button onClick={handleLogin}>LOGIN</button>
              </section>
          </div>
    </div>
  )
}

export default Login