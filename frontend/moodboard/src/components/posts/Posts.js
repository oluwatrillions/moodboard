import React, { useState, useEffect} from 'react'
import {Container, Typography, Grid, Paper} from '@material-ui/core'
import './Posts.css'
import axios from 'axios'
import Post from './Post'

const Posts = () => {
    
    const [feedback, setFeedback] = useState([])

      useEffect(()=>{
    
        getAllPosts();

      }, [])
    
    const getAllPosts = async () => {
        await axios.get('http://localhost:4000/post')
            .then((response) => {
                console.log(response);
                setFeedback(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }


    return (
        <Container disableGutters maxWidth={false}>
            <div className='post-container'>
                <div className= 'first-div'>
                    <Post />
                </div>
                <div className='second-div'>
      <Container style={{ backgroundColor: 'white' }} className='secondary'>
            <div>
                      <header>
                          <nav>
                              <li>
                                  <Typography variant='h4' >Posts</Typography>
                                  <Typography variant='h4'>My Posts</Typography>
                              </li>
                          </nav>
                      </header>
                      <Grid container className='all-moods'>
                          <Grid item style={{ backgroundColor: "red" }}>
                              <Paper>
                                    {feedback.map((allMoods, key) => {
                                        return (
                                            <div key={allMoods._id}>
                                            <h3>{allMoods.postedBy}</h3>
                                            <h4>{allMoods.title}</h4>
                                            <h4>{ allMoods.mood}</h4>
                                        </div>
                                        )
                                    })}
                                </Paper>
                          </Grid>
                      </Grid>
          </div>            
                    </Container>
                    </div>
            </div>
            </Container>
  )
}

export default Posts;