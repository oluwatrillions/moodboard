import React, { useState, useEffect, useRef } from 'react'
import {Container, Typography} from '@material-ui/core'
import './Post.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Post = () => {

    const navigate = useNavigate()

    const errRef = useRef()

    const [name, setName] = useState()
    const [title, setTitle] = useState()
    const [mood, setMood] = useState()

    const [errMsg, setErrMsg] = useState()


    useEffect(() => {
        setErrMsg('')
    }, [name, title, mood])

    const postBtn = async (e) => {
        e.preventDefault();
        try {
            const Post = await axios.post('http://localhost:4000/post', {
                postedBy: name,
                title: title,
                mood: mood,

            }).then((response) => {
                console.log(response.data);
                setName('')
                setTitle('')
                setMood('')
                navigate('/posts')
            })
        } catch (error) {
           console.log(error);
        }
    }
    
  return (
    <Container disableGutters maxWidth={false}>
          <div className='parent'>
              <Container disableGutters maxWidth={false} component='div' className='primary'>
                  <section className='mood-section'>
                      <Typography variant='h4' className='mood-heading'>What's your mood like today?</Typography>
                      <Typography variant='h5' ref={errRef} className={errMsg ? 'errMessage' : 'noErrMessage'}>{errMsg}</Typography>
                      
                      <form onClick={postBtn}>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' value={name} onChange={(e) => (setName(e.target.value))} />
                          
                            <label htmlFor='title'>Title:</label>
                            <input type='text' name='title' value={title} onChange={(e) => (setTitle(e.target.value))} />  
                          
                            <label htmlFor='mood'>Mood:</label>
                            <textarea name='name' rows={4} value={mood} onChange={(e) => (setMood(e.target.value))}></textarea>
                          
                            <button className='btn'>POST</button>
                      </form>
                  </section>
              </Container>
          </div>
     </Container>     
  )
}

export default Post