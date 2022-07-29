import React from 'react'
import {Container} from '@material-ui/core'
import Post from './Post'

const GuestPage = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <div className='guest-container'>
                <div className='guest-post-page'>
                    <Post/>
                </div>
            </div>
        </Container>
  )
}

export default GuestPage