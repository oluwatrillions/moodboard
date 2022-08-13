import React, { useState, useEffect} from 'react'
import { Container, Grid, Card } from '@material-ui/core'
import './Posts.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import SingleUserPost from '../users/SingleUserPost'


const Posts = () => {
    const [Id, setId] = useState('')
    const navigate = useNavigate()

    
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
      <Container disableGutters maxWidth={false} >
            <div className='secondary'>
                <Grid container className='all-moods'>                              
                    {feedback.map((allMoods) => {
                        return (
                            <Grid item xs={6} md={2} className='outlook' onClick={()=> navigate(`/post/${allMoods._id}`)}>
                                <Card key={allMoods._id}>
                                        <div  className='mood-board'>
                                            <h3 className='posted-by'>{allMoods.postedBy}</h3>
                                            <h4 className='mood-title'>{allMoods.title}</h4>
                                        {/* <h4 className='mood'>{ allMoods.mood}</h4> */}
                                        <SingleUserPost id={allMoods._id } title={allMoods.title} postedBy={allMoods.postedBy} mood={allMoods.mood}  />
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

export default Posts;