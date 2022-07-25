import React, { useState, useEffect, useRef } from 'react'
import {Container, Typography, TextField} from '@material-ui/core'
import './Posts.css'

const Posts = () => {
    const errRef = useRef()

    const [inputs, setInputs] = useState({
        name: '',
        title: '',
        mood: '',
    })

    const [errMsg, setErrMsg] = useState()

    useEffect(() => {
        
    }, [])

  return (
      <Container maxWidth='100vw' className='container'>
          <div className='parent'>
              <Container className='primary'>
                  <section className='mood-section'>
                      <Typography variant='h3' className='mood-heading'>What's your mood like today?</Typography>
                      <form >
                          <main>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name'/>
                          </main>
                          <main>
                            <label htmlFor='title'>Title:</label>
                            <input type='text' name='title' />  
                          </main>
                          <textarea name='name' rows={4}>Mood</textarea>
                          <button>POST</button>
                      </form>
                  </section>
              </Container>
              <Container style={{backgroundColor: 'white'}} className='secondary'>
                  <div>
                      POSTS
                  </div>
              </Container>
          </div>            
    </Container>
  )
}

export default Posts;