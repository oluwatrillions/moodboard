import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    user: [],
    loading: true,
    error: false
}

export const registerNewUser = createAsyncThunk('register/registerNewUser', async ({name, username, email, password}) => {
    try {
        const resp = await axios.post('http://localhost:4000/register', {
            name,
            username,
            email,
            password
        })
        console.log(resp.data);
            return resp.data
    } catch (error) {
        console.log(error);        
    }
})

const registerSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        newUser: {
            reducer(state, action) {
                state.user.push(action.payload)
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(registerNewUser.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(registerNewUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            return action.payload;
        })
        builder.addCase(registerNewUser.rejected, (state) => {
            state.loading = false;
            state.error = true;
            console.log(state.error);
        })
    }
})


export const {newUser} = registerSlice.actions

export default registerSlice.reducer