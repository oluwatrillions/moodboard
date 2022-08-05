import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = []

export const getUser = createAsyncThunk('users/getUser', async () => {
    const response = await axios.get('http://localhost:4000/posts')
    return response.data
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUser.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const getAllUsers = (state) => state.users;

export default usersSlice.reducer
