import React, { useState } from 'react'
import { Container, Card, Grid } from '@material-ui/core'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../posts/Posts.css'

const SingleUserPost = ({id}) => {
    const params = useParams()

    const [name, setName] = useState()
    const [title, setTitle] = useState()
    const [mood, setMood] = useState()

    const [postId, setPostId] = useState(null)
    // console.log(id, mood, title, postedBy);

     const [feedback, setFeedback] = useState([])

    return (
        <>
            { feedback && 
            <Container disableGutters maxWidth={false} >
                    <div className='secondary'>
                        <Grid container className='all-moods'>                              
                            <Grid item xs={6} md={2} className='outlook'>
                                        <Card key={id}>
                                                <div  className='mood-board'>
                                                    <h3 className='posted-by'>{name}</h3>
                                                    <h4 className='mood-title'>{title}</h4>
                                                    <h4 className='mood'>{mood}</h4>
                                                </div>
                                        </Card>
                                </Grid>
                        </Grid>
                    </div>
                </Container>
             }
        </>
    )
}

export default SingleUserPost