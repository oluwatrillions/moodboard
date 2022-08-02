import React, { useState, useEffect, useRef } from 'react'
import {Container, Typography} from '@material-ui/core'
import './Post.css'
import axios from 'axios'

const Post = () => {

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
                mood: mood
            }).then((response) => {
                console.log(response.data);
                setName('')
                setTitle('')
                setMood('')
            })
        } catch (error) {
            if (error.response.status === 400) {
                setErrMsg('Bad Request. Please try again')
            } else if (error.response.status === 500) {
                setErrMsg('Internal Error')
            } else {
                setErrMsg('Server is down');
            }
        }
    }
    
  return (
    <Container disableGutters maxWidth={false}>
          <div className='parent'>
              <Container disableGutters maxWidth={false} component='div' className='primary'>
                  <section className='mood-section'>
                      <Typography variant='h4' className='mood-heading'>What's your mood like today?</Typography>
                      <Typography variant='h5' ref={errRef} className={errMsg ? 'errMessage' : 'noErrMessage'}>{ errMsg}</Typography>
                      <form >
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' value={name} onChange={(e) => (setName(e.target.value))} />
                          
                            <label htmlFor='title'>Title:</label>
                            <input type='text' name='title' value={title} onChange={(e) => (setTitle(e.target.value))} />  
                          
                            <label htmlFor='mood'>Mood:</label>
                            <textarea name='name' rows={4} value={mood} onChange={(e) => (setMood(e.target.value))}></textarea>
                          
                          <button onClick={postBtn}>POST</button>
                      </form>
                  </section>
              </Container>
          </div>
     </Container>     
  )
}

export default Post