import React, { useState, useEffect} from 'react'
import { Container, Typography, Grid, Card } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import './Posts.css'
import axios from 'axios'
import Post from './Post'
import MyPosts from './MyPosts'

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
                <div>
                    <MyPosts/>
                </div>
      {/* <Container disableGutters maxWidth={false} style={{ backgroundColor: 'white' }} >
            <div className='secondary'>
                      <header>
                          <nav>
                                <li>
                                    <NavLink to='/posts' className={({isActive})=>(isActive ? 'active-class' : 'undefined')}>
                                        <Typography
                                            variant='h4'
                                            style={{ color: 'cyan' }}
                                        >Posts
                                        </Typography>
                                    </NavLink> 
                                    <NavLink to='/post/:id' className={({isActive})=>(isActive ? 'active-class' : 'undefined')}>
                                        <Typography variant='h4'
                                            style={{ color: 'cyan' }}>
                                            My Posts
                                        </Typography>
                                    </NavLink>
                              </li>
                          </nav>
                      </header>
                      <Grid container className='all-moods'>                              
                                    {feedback.map((allMoods, key) => {
                                        return (
                                            <Grid item xs={6} md={2} className='outlook'>
                                                <Card>
                                                    <div key={allMoods._id} className='mood-board'>
                                                        <h3 className='posted-by'>{allMoods.postedBy}</h3>
                                                        <h4 className='mood-title'>{allMoods.title}</h4>
                                                        <h4 className='mood'>{ allMoods.mood}</h4>
                                                    </div>
                                                </Card>
                                            </Grid>
                                        )
                                    })}
                      </Grid>
          </div>            
                    </Container> */}
            </div>
            </Container>
  )
}

export default Posts;