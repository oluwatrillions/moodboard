import React, { useState, useEffect, useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './SignUp.css'
import axios from 'axios'

const Home = () => {

    const navigate = useNavigate()

    const errRef = useRef()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')


    useEffect(() => {
        setErrMsg('')
    }, [name, username, email, password])
    
    const signupBtn = async (e) => {
        e.preventDefault()

       try {
           await axios.post('http://localhost:4000/register', {
               name,
               username,
               email,
               password,
        })
        return navigate('/login')
       } catch (error) {
        console.log(error);
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