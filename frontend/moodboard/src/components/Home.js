import React, { useState, useEffect, useRef } from 'react'
import './Home.css'
import axios from 'axios'

const Home = () => {

    const errRef = useRef()

    const [name, setName]= useState('')
    const [username, setUsername]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')

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
              password: password
          }).then();
          console.log(details);
          
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
                <button onClick={signupBtn}>SIGN UP</button>
        </section>
    </div>
  )
}

export default Home