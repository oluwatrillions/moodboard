import React, { useState, useEffect, useRef } from 'react'
import {Container, Typography, Grid, TextField} from '@material-ui/core'
import './Posts.css'
import axios from 'axios'

const Posts = () => {
    const errRef = useRef()

    const [name, setName] = useState()
    const [title, setTitle] = useState()
    const [mood, setMood] = useState()

    const [errMsg, setErrMsg] = useState()

    const [feedback, setFeedback] = useState([])

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
    
    const GetFeedback = async () => {
        const feedback = await axios.get('http://localhost:4000/post')
        setFeedback(feedback.data)
        console.log(feedback);
    }

    useEffect(()=>{

    GetFeedback()
    }, [])


  return (
      <Container maxWidth='100%' className='container'>
          <div className='parent'>
              <Container className='primary'>
                  <section className='mood-section'>
                      <Typography variant='h3' className='mood-heading'>What's your mood like today?</Typography>
                      <Typography variant='h5' ref={errRef} className={errMsg ? 'errMessage' : 'noErrMessage'}>{ errMsg}</Typography>
                      <form >
                          <main className='inputs'>
                            <label htmlFor='name'>Name:</label>
                              <input type='text' name='name' value={ name} onChange={(e)=>(setName(e.target.value))}/>
                          </main >
                          <main className='inputs'>
                            <label htmlFor='title'>Title:</label>
                              <input type='text' name='title' value={ title} onChange={(e) => (setTitle(e.target.value))} />  
                          </main>
                          <main className='inputs'>
                            <label htmlFor='mood'>Mood:</label>
                              <textarea name='name' rows={4} value={ mood} onChange={(e) => (setMood(e.target.value))}></textarea>                              
                          </main>
                          <button onClick={postBtn}>POST</button>
                      </form>
                  </section>
              </Container>
              <Container style={{backgroundColor: 'white'}} className='secondary'>
                  <div>
                      <header>
                          <nav>
                              <li>
                                  <Typography variant='h3'>Posts</Typography>
                                  <Typography variant='h3'>My Posts</Typography>
                              </li>
                          </nav>
                      </header>
                      <Grid container>
                          <Grid item xs={12} md={6}>
                              {feedback.map((allMoods, key) => {
                                  return (
                                      <div key={allMoods._id}>
                                      <h3>{allMoods.postedBy}</h3>
                                      <h4>{allMoods.title}</h4>
                                      <h4>{ allMoods.mood}</h4>
                                  </div>
                                  )
                              })}
                          </Grid>
                      </Grid>
                  </div>
              </Container>
          </div>            
    </Container>
  )
}

export default Posts;