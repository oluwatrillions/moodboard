import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/usersSlice'
import registerReducer from '../features/registerSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        register: registerReducer
    }
})