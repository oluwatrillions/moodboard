import React, { useEffect, useState } from 'react'
import { Container, Card, Grid } from '@material-ui/core'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import './SingleUserPost.css'
const SingleUserPost = () => {
    
    let {id} = useParams()

    const [feed, setFeed] = useState([])

    useEffect(() => {
        const getSinglePosts = async () => {
            await axios
                .get(`http://localhost:4000/post/${id}`)
                .then((response) => {
                    setFeed(response.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        };
        getSinglePosts();

    }, [feed])
    

    return (
        <Container disableGutters maxWidth={false} className='primary'>
            <Grid
                className='mood-grid'
                item
            xs={4}>
                <Card >
                    <div className='mood-key' key={feed.id}>
                            <h3 className='poster'>{feed.name}</h3>
                            <h4 className='mood-topic'>{feed.title}</h4>
                            <h4 className='mood-body'>{feed.mood}</h4>
                    </div>
                </Card>
            </Grid>
        </Container>
    )
}
export default SingleUserPost