import React, { useState } from 'react'
import { Container, Card, Grid } from '@material-ui/core'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../posts/Posts.css'

const SingleUserPost = (post) => {
    const params = useParams()

    const [postId, setPostId] = useState(null)

     const [feedback, setFeedback] = useState([])

    
    const getSinglePosts = async () => {
        await axios.get(`http://localhost:4000/post/${params}`)
            .then((response) => {
                console.log(response);
                setFeedback(response.data)
                console.log(feedback);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            { feedback && 
            <Container disableGutters maxWidth={false} >
                    <div className='secondary'>
                        <Grid container className='all-moods'>                              
                            {feedback.map((allMoods) => {
                                return (
                                    <Grid item xs={6} md={2} className='outlook'>
                                        <Card key={allMoods.id}>
                                            <Link to='/post/:id'>
                                                <div  className='mood-board'>
                                                    <h3 className='posted-by'>{allMoods.postedBy}</h3>
                                                    <h4 className='mood-title'>{allMoods.title}</h4>
                                                    <h4 className='mood'>{ allMoods.mood}</h4>
                                                </div>
                                            </Link>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </Container>
             }
        </>
    )
}

export default SingleUserPost