import React, { useState, useEffect, useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { newUser } from './features/registerSlice'

const Home = () => {

    const dispatch = useDispatch()
    const usersNew = useSelector((state) => state.user)

    const navigate = useNavigate()

    const errRef = useRef()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState(1)
    const [errMsg, setErrMsg] = useState('')


    useEffect(() => {
        setErrMsg('')
    }, [name, username, email, password])
    
    const signupBtn = (e) => {
        e.preventDefault()
        try {
            
            dispatch(newUser({
                name,
                username,
                email,
                password,
            }));
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
          

    //    try {
    //        const logger = await axios.post('http://localhost:4000/register', {
    //            name,
    //            username,
    //            email,
    //            password
    //     })
    //     return navigate('/login')
    //    } catch (error) {
    //     console.log(error);
    //    }
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