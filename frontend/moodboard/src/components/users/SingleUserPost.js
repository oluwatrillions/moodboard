import React, { useEffect, useState } from 'react'
import { Container, Card } from '@material-ui/core'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../posts/Posts.css'

const SingleUserPost = ({id}) => {

    const [postId, setPostId] = useState('')
    // console.log(id, mood, title, postedBy);

    const [feed, setFeed] = useState([])

    useEffect(() => {
        const getSinglePosts = async () => {
           await axios.get(`http://localhost:4000/post/${postId}`)
               .then((response) => {
                   setFeed(response.data)
                   setPostId(response.data.postId)
               }).catch((err) => {
                   console.log(err);
               })
        }
        getSinglePosts();

    }, [feed])
    

    return (
        <Container disableGutters maxWidth={false} >
            <Card >
                {
                    feed.map((allMoods) => {
                        console.log(allMoods);
                       return(
                        
                           <div className='mood-board' key={allMoods.id}>
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