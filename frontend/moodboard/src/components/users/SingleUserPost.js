import React, { useEffect, useState } from 'react'
import { Container, Card } from '@material-ui/core'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../posts/Posts.css'

const SingleUserPost = () => {
    
    const {id} = useParams()

    const [feed, setFeed] = useState([])

    // const setPost = (data) => {
    //     let posts = []
    //     data.map((post, i) => {
    //         posts.push(post [i])
    //     })
    //     setPost
    // }

    useEffect(() => {
        const getSinglePosts = async () => {
           await axios.get(`http://localhost:4000/post/${id}`)
               .then((response) => {
                   setFeed(response.data)
               }).catch((err) => {
                   console.log(err);
               })
        }
        getSinglePosts();

    }, [feed])
    

    return (
        <Container disableGutters maxWidth={false} >
            <Card >
                <div className='mood-board' key={feed.postId}>
                        <h3 className='posted-by'>{feed.name}</h3>
                        <h4 className='mood-title'>{feed.title}</h4>
                        <h4 className='mood'>{feed.mood}</h4>
                </div>
            </Card>
        </Container>
    )
}
export default SingleUserPost