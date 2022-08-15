import React, { useEffect, useState } from 'react'
import { Container, Card, Grid } from '@material-ui/core'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../posts/Posts.css'

const SingleUserPost = ({id, name, title, mood}) => {
    const params = useParams()._id

    const [postId, setPostId] = useState(null)
    // console.log(id, mood, title, postedBy);

    const [feedback, setFeedback] = useState([])

    const getSinglePosts = async ({_id}) => {
       await axios.get(`http://localhost:4000/post/${params}`)
           .then((response) => {
               console.log('hello');
               setFeedback(response.data)
               console.log(feedback);
           }).catch((err) => {
               console.log(err);
           })
    }
    

    return (
        <Container disableGutters maxWidth={false} >
            <Card >
                {
                    feedback.map((allMoods) => {
                        console.log(allMoods);
                       return(
                        
                           <div className='mood-board' key={allMoods.id} onClick={getSinglePosts}>
                                    <h3 className='posted-by'>{allMoods.name}</h3>
                                    <h4 className='mood-title'>{allMoods.title}</h4>
                                    <h4 className='mood'>{allMoods.mood}</h4>
                            </div>
                       ) 
                    })
                }
            </Card>
        </Container>
    )
}
export default SingleUserPost