import React, { useEffect, useState } from 'react'
import { Container, Card, Grid, Button } from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import axios from 'axios'
import { Link, useNavigate, useParams} from 'react-router-dom'
import './SingleUserPost.css'

const SingleUserPost = ({name, title, mood, postId, allMoods}) => {
    
    const { id } = useParams()
    const navigate = useNavigate()

    const [feed, setFeed] = useState([])
    const [editTitle, setEditTitle] = useState('')
    const [editMood, setEditMood] = useState('')

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

    }, [id, feed])

    const MyButton = styled(Button)({
        background: 'rgb(53, 66, 66)',
        margin: 0,
        color: 'white',
        width: '28px',
        fontSize: '20px',
        padding: '.5em 1.5em',
        cursor: 'pointer'
    })

    const deletePost = async (deletemood) => {
        // await axios.delete(`http://localhost:4000/post/${postId}`)
        //     .then((response) => {
        //         setFeed(response.data)
        //         navigate('/posts')
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        const deletedPost = allMoods.filter(moods => moods.postId !== deletemood)
        setFeed(deletedPost)
    }

    const editPost = async (id) => {
            const updatedPost = await axios.put(`http://localhost:4000/post/${id}`, {
            title: editTitle,
            mood: editMood
            }).then((response) => {
                console.log(id);
                setFeed(feed.map(post => post.postId === id))
                navigate(`/post/editpost/${postId}`)
                console.log('hello')
            }).catch((err) => {
                console.log(err);
            })
    }
    

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
                            <MyButton onClick={()=>editPost(feed.postId)}>Edit</MyButton>
                            <MyButton onClick={deletePost}>Delete</MyButton>
                        </div>
                    </div>    
                </Card>
            </Grid>
        </Container>
    )
}
export default SingleUserPost