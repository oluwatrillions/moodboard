import React, { useState, useEffect } from 'react'
import { Container, Grid, Card } from '@material-ui/core'
import axios from 'axios'
import './MyPosts.css'
import PostHeader from './PostHeader'


const MyPosts = () => {

    
    const [feedback, setFeedback] = useState([])

      useEffect(()=>{
    
        getMyPosts();

      }, [])
    
    const getMyPosts = async () => {
        await axios.get('http://localhost:4000/post:id')
            .then((response) => {
                console.log(response);
                setFeedback(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }
    
  return (
      <Container disableGutters maxWidth={false} className='myPost-container'>
          <div><PostHeader/></div>
            <div className='secondary'>
                      <Grid container className='all-moods'>                              
                                    {feedback.map((myMoods, key) => {
                                        return (
                                            <Grid item xs={6} md={2} className='outlook'>
                                                <Card>
                                                    <div key={myMoods._id} className='mood-board'>
                                                        <h3 className='posted-by'>{myMoods.postedBy}</h3>
                                                        <h4 className='mood-title'>{myMoods.title}</h4>
                                                        <h4 className='mood'>{ myMoods.mood}</h4>
                                                    </div>
                                                </Card>
                                            </Grid>
                                        )
                                    })}
                      </Grid>
          </div>            
    </Container>
  )
}

export default MyPosts;