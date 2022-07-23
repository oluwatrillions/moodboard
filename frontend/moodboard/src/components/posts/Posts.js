import React, { useState, useEffect, useRef } from 'react'
import {Container, Grid, TextField, Typography, TextareaAutosize, Button} from '@material-ui/core'
import './Posts.css'

const Posts = () => {
    const errRef = useRef()

    const [{ name, title, mood, time }] = useState({})

    const [errMsg, setErrMsg] = useState()

    useEffect(() => {
        
    }, [])

  return (
      <Container maxWidth='100vw' className='container'>
          <div className='parent'>
              <Container className='primary'>
                  <section>
                      <Typography variant='h3'>
                          What's your MOOD like today?
                      </Typography>
                      <Grid container className='mood-field'>
                        <TextField style={{width: '20vw', backgroundColor: 'white'}} name='name' label='Name' variant='outlined'/>
                        <TextField style={{width: '20vw', backgroundColor: 'white'}} name='title' label='Title' variant='outlined'/>
                        <TextareaAutosize className='mood-area' minRows={4} style={{width: '20vw'}} name='mood' placeholder='Mood'/>
                      </Grid>
                      <Button className='btn' style={{width: '20vw'}}>SEND</Button>
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