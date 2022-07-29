import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import './PostHeader.css'



const PostHeader = () => {
  return (
    <Container disableGutters maxWidth={false} component='div' className='header'>
                       <header>
                          <nav>
                                <li>
                                    <NavLink to='/posts' className={({isActive})=>(isActive ? 'active-class' : 'undefined')}>
                                        <Typography
                                            variant='h4'
                                            style={{ color: 'cyan' }}
                                            // onClick={getAllPosts}
                                        >
                                        Posts
                                        </Typography>
                                    </NavLink> 
                                    <NavLink to='/post/:id' className={({isActive})=>(isActive ? 'active-class' : 'undefined')}>
                                        <Typography variant='h4'
                                            style={{ color: 'cyan' }}
                                            // onClick={getMyPosts}
                                            >
                                            My Posts
                                        </Typography>
                                    </NavLink>
                              </li>
                          </nav>
                      </header>
    </Container>
  )
}

export default PostHeader