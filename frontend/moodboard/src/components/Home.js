import React, { useState, useEffect, useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import getAllUsers from './features/usersSlice'

const Home = () => {

    const dispatch = useDispatch()

    const user = useSelector(getAllUsers)

    const navigate = useNavigate()

    const errRef = useRef()

    const [name, setName]= useState('')
    const [username, setUsername]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [userId, setUserId] = useState('')

    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        setErrMsg('')
    }, [name, username, email, password])
    
    const signupBtn = async (e) => {
        e.preventDefault()
      try {
          const details = await axios.post("http://localhost:4000/register", {
              name: name,
              username: username,
              email: email,
              password: password,
              id: userId 
          }).then((response) => {
              if (response.status === 201) {
                  return navigate('/login')
              }
              console.log(response.data.userId);
            });
            console.log(details);
          setName('')
          setUsername('')
          setEmail('')
          setPassword('')
          setUserId('')
      } catch (error) {
          console.log(error);
          if (error.response === 404) {
            setErrMsg('You are making a bad request')
          } else if (error.response === 409) {
              setErrMsg('User already exists')
          } else {
              setErrMsg('Internal error')
        }
      }

    }
    
    return (
    <div className='home'>
            <section>
                <h3 ref={errRef} className={errMsg ? "errMsg" : "noErrMsg"}>{ errMsg}</h3>
                <form >
                    <main>
                        <label htmlFor='name'>Name:</label> 
                        <input type="text" name='name' value={name} onChange={ ((e)=> setName(e.target.value))} />
                    </main>
                    <main>
                        <label htmlFor='username'>Username:</label> 
                        <input type="text" name='username' value={username} onChange={ ((e)=> setUsername(e.target.value))}/>
                    </main>
                    <main>
                        <label htmlFor='email'>Email:</label> 
                        <input type="text" name='email' value={email} onChange={ ((e)=> setEmail(e.target.value))}/>
                    </main>
                    <main>
                        <label htmlFor='password'>Password:</label> 
                        <input type="password" name='password' value={password} onChange={ ((e)=> setPassword(e.target.value))}/>
                    </main>
                </form>
                <div className='btn-group'>
                    <button onClick={signupBtn}>SIGN UP</button>
                    <h4>Have an account? <span> <Link to='/login'>SIGN IN</Link></span></h4>
                </div>
        </section>
    </div>
  )
}

export default Home