import React from 'react'
import './Header.css'
import { Container, Typography } from '@material-ui/core'
import {NavLink} from 'react-router-dom'



const Header = () => {
    return (
      <Container disableGutters maxWidth={false}>
             <header>
                    <nav>
                        <li>
                            <NavLink to='/post' className={({isActive})=>(isActive ? 'active-class' : 'undefined')}>
                                <Typography variant='h4'
                                    style={{ color: 'cyan' }}
                                    // onClick={postBtn}
                                    >
                                    Create Post
                                </Typography>
                            </NavLink>
                            <NavLink to='/posts' className={({isActive})=>(isActive ? 'active-class' : 'undefined')}>
                                <Typography
                                    variant='h4'
                                    style={{ color: 'cyan' }}
                                    // onClick={getAllPosts}
                                >
                                View Posts
                                </Typography>
                            </NavLink> 
                        </li>
                    </nav>
            </header>
        </Container>
  )
}

export default Header