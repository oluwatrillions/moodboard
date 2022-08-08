import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    user: [],
    loading: true,
}

export const registerNewUser = createAsyncThunk('register/registerNewUser', async () => {
    try {
        const resp = await axios.post('http://localhost:4000/register')
            return resp.data
    } catch (error) {
        console.log(error);        
    }
})

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(registerNewUser.fulfilled, (state, action) => {
            state.loading : false,
            state.user : action.payload;
        })
    }
})


export const registerUser = registerSlice.actions

export default registerSlice.reducer