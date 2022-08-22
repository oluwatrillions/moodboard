import React, { useEffect, useState } from 'react'
import { Container, Card, Grid, Button } from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
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

    const MyButton = styled(Button)({
        background: 'rgb(53, 66, 66)',
        margin: 0,
        color: 'white',
        width: '28px',
        fontSize: '20px',
        padding: '.5em 1.5em',
        cursor: 'pointer'
    })
    

    return (
        <Container disableGutters maxWidth={false} className='primary'>
            <Grid
                className='mood-grid'
                item
                xs={12}>
                <Card >
                    <div className='single-user'>
                        <div className='mood-key' key={feed.id}>
                                <h3 className='poster'>{feed.name}</h3>
                                <h4 className='mood-topic'>{feed.title}</h4>
                                <h4 className='mood-body'>{feed.mood}</h4>
                        </div>
                        <div className='btn-div'>
                            <MyButton>Edit</MyButton>
                            <MyButton>Delete</MyButton>
                        </div>
                    </div>    
                </Card>
            </Grid>
        </Container>
    )
}
export default SingleUserPost