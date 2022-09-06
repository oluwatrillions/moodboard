import { Container, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Post.css'

const EditPost = ({editPost, feed, editMood, setEditMood, editTitle, setEditTitle}) => {
    const { id } = useParams()
    const navigate = useNavigate()

    // const post = feed.find(post => post.postId.toString() === id)
    // console.log(post);

    const [moods, setMoods] = useState('')

    const errMsg = useRef()
    const errRef = useRef()

    // useEffect(() => {
    //     if (post) {
    //         setEditMood(post.mood)
    //         setEditTitle(post.title)
    //     }
    // }, [post, setEditTitle, setEditMood])

    const editedPost = async () => {
        await axios.put(`http://localhost:4000/post/${id}`, {
        }).then((response) => {
            setEditMood(response.data.mood)
            setEditTitle(response.data.title)
        }).catch((err) => {
          console.log(err);
      })
    }

  return (
      <Container disableGutters maxWidth={false}>
              <div className='parent'>
                  <Container disableGutters maxWidth={false} component='div' className='primary'>
                      <section className='mood-section'>
                          <Typography variant='h4' className='mood-heading'>What's your mood like today?</Typography>
                          <Typography variant='h5' ref={errRef} className={errMsg ? 'errMessage' : 'noErrMessage'}>{errMsg.current}</Typography>
                      
                          <form onClick={(e) => e.preventDefault()}>
                              <label htmlFor='title'>Title</label>
                              <input type='text' name='title' value={editTitle} onChange={(e) => (setEditTitle(e.target.value))} />
                          
                              <label htmlFor='mood'>Mood</label>
                              <textarea name='name' rows={4} value={editMood} onChange={(e) => (setEditMood(e.target.value))}>{feed}</textarea>
                          
                              <button className='btn' onClick={editPost}>UPDATE</button>
                          </form>
                      </section>
                  </Container>
              </div>
     </Container>
  )
}

export default EditPost