import React, { useState, useEffect, useRef } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import './Posts.css'
import { Typography } from '@material-ui/core'

const Posts = () => {
    const errRef = useRef()

    const [{ name, title, mood, time }] = useState({})

    const [errMsg, setErrMsg] = useState()

    useEffect(() => {
        
    }, [])

  return (
      <div className='container'>
          <Container >
              <header className='header'>
                  <Typography variant='h3'>Post</Typography>
                  <Typography variant='h3'>My Posts</Typography>
                  <Typography variant='h3'>Posts</Typography>
              </header>
             
          </Container>
    </div>
  )
}

export default Posts;