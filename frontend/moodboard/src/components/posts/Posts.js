import React, { useState, useEffect} from 'react'
import { Container, Grid, Card } from '@material-ui/core'
import './Posts.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SingleUserPost from '../users/SingleUserPost'


const Posts = () => {
    const navigate = useNavigate()
    
    const [feedback, setFeedback] = useState([])
    const [postpage, setPostpage] = useState(false)

      useEffect(()=>{
          const getAllPosts = async () => {
              await axios
                  .get('http://localhost:4000/post')
                  .then((response) => {
                      setFeedback(response.data)
                  })
                  .catch((err) => {
                      console.log(err);
                  })
        }
        getAllPosts(); 
      }, [])

    return (
      <Container disableGutters maxWidth={false} >
            <div className='secondary'>
                <Grid container className='all-moods'>                              
                    {feedback.map((allMoods) => {
                        return (
                            <Grid
                                item
                                xs={6}
                                md={2}
                                className='outlook'
                                onClick={() => navigate(`/post/${allMoods.postId}`)}>
                                <div>
                                    {
                                        !postpage ?
                                            <Card key={allMoods._id}
                                                onClick={() => {
                                                    setPostpage(true)
                                        }}>
                                            <div  className='mood-board'>
                                                <h3 className='posted-by'>{allMoods.postedBy}</h3>
                                                <h4 className='mood-title'>{allMoods.title}</h4>
                                            <h4 className='mood'>{ allMoods.mood}</h4>
                                            </div>
                                        </Card>

                                            : 

                                             
                                        <SingleUserPost
                                            postId={allMoods.postId}
                                            name={allMoods.name}
                                            title={allMoods.title}
                                            mood={allMoods.mood} />
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