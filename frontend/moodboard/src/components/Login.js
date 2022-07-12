import React, { useState, useRef, useEffect } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {

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
            const loginBtn = await axios.get("http://localhost:4000/login", {
                username: username,
                password: password
            }).then();
            console.log(loginBtn);
            setUsername('')
            setPassword('')
        } catch (error) {
            console.log(error.response);
            if (error.response.status === 401) {
                setErrMsg('Unauthorized')
            } else if (error.response.status === 404) {
                setErrMsg('User not found')
            } else if (error.response.status === 400) {
                setErrMsg('Bad request')
            } else {
                setErrMsg('Internal error')
            }
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