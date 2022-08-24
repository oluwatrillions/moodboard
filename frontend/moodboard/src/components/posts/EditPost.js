import { Container, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = ({editPost, feed, editMood, setEditMood, editTitle, setEditTitle}) => {
    const { id } = useParams()
    // const post = feed.filter(post => post.id.toString() !== id)
    
    const navigate = useNavigate()
    const [editedTitle, setEditedTitle] = useState([])
    const [editedMood, setEditedMood] = useState([])
    const [moods, setMoods] = useState('')

    const errMsg = useRef()
    const errRef = useRef()

    // useEffect(() => {
    //     if (post) {
    //         setEditMood(post.mood)
    //         setEditTitle(post.title)
    //     }
    // }, post, setEditTitle, setEditMood)

        const editedPost = async () => {
            await axios.put(`http://localhost:4000/post/${id}`, {
            }).then((response) => {
                setEditedMood(response.data.mood)
                setEditedTitle(response.data.title)
            }).catch((err) => {
                console.log(err);
            })
        }

  return (
    <Container disableGutters maxWidth={false}>
          <div className='parent'>
              {/* { editTitle &&
                <> */}
                  <Container disableGutters maxWidth={false} component='div' className='primary'>
                      <section className='mood-section'>
                          <Typography variant='h4' className='mood-heading'>What's your mood like today?</Typography>
                          <Typography variant='h5' ref={errRef} className={errMsg ? 'errMessage' : 'noErrMessage'}>{errMsg}</Typography>
                      
                          <form >
                              <label htmlFor='title'></label>
                              <input type='text' name='title' value={editedTitle} onChange={(e) => (setEditTitle(e.target.value))} />
                          
                              <label htmlFor='mood'></label>
                              <textarea name='name' rows={4} value={editedMood} onChange={(e) => (setEditMood(e.target.value))}></textarea>
                          
                          <button className='btn' onClick={editedPost}>UPDATE</button>
                          </form>
                      </section>
                    </Container>
                {/* </>
              } */}
              {/* {!editTitle && 
                  <>
                  <h6>Page not Found</h6>
                  <h3>Return to <span onClick={()=>navigate('/posts')}>POSTS</span></h3>
                  </>
              } */}
          </div>
     </Container>
  )
}

export default EditPost