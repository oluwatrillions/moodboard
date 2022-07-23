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
                        <TextField style={{width: '20vw'}} name='name' label='Name' variant='outlined'/>
                        <TextField style={{width: '20vw'}} name='title' label='Title' variant='outlined'/>
                        <TextareaAutosize className='mood-area' minRows={4} style={{width: '20vw'}} name='mood' placeholder='Mood'/>
                      </Grid>
                      <Button variant='filled'>SEND</Button>
                  </section>
              </Container>
              <Container className='secondary'>
                  
              </Container>
          </div>            
    </Container>
  )
}

export default Posts;