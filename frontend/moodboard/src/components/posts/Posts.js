import React, { useState, useEffect} from 'react'
import { Container, Grid, Card } from '@material-ui/core'
import './Posts.css'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SingleUserPost from '../users/SingleUserPost'


const Posts = ({id}) => {
    const [Id, setId] = useState('')
    const navigate = useNavigate()

    const params = useParams()

    
    const [feedback, setFeedback] = useState([])
    const [postpage, setPostpage] = useState(false)

      useEffect(()=>{
    
        getAllPosts();

      }, [])
    
    const getAllPosts = async () => {
        const feedback = await axios.get('http://localhost:4000/post')
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
                            <Grid item xs={6} md={2} className='outlook' onClick={() => navigate(`/post/${params._id}`)}>
                                <div>
                                    {
                                        !postpage ? <Card key={allMoods._id} onClick={() => {
                                            setPostpage(true)
                                            console.log(allMoods._id);
                                        }}>
                                            <div  className='mood-board'>
                                                <h3 className='posted-by'>{allMoods.postedBy}</h3>
                                                <h4 className='mood-title'>{allMoods.title}</h4>
                                            <h4 className='mood'>{ allMoods.mood}</h4>
                                            </div>
                                        </Card>

                                            : 

                                             
                                            <SingleUserPost id={allMoods._id} name={allMoods.name} title={allMoods.title} mood={allMoods.mood } />
                                }
                                </div>
                                </Grid>
                        )
                    })}
                </Grid>
            </div>
        </Container>
  )
}

export default Posts;