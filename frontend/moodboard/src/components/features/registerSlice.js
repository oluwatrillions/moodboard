import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    user: [],
    isLoading: false,
    error: false
}

export const registerNewUser = createAsyncThunk('register/registerNewUser', async({name, username, email, password}) => {
    try {
        const resp = await axios.post('http://localhost:4000/register', {
            name,
            username,
            email,
            password
        }).unwrap()
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
                state.user = action.payload
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(registerNewUser.pending, (state) => {
                state.isLoading = true;
        })
            .addCase(registerNewUser.fulfilled, (state, action) => {
            console.log(action);
                state.register.push(newUser)
                state.isLoading = false;
                state.error = false;
                console.log(action.payload);
        })
            .addCase(registerNewUser.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
        })
    }
})

export const RegisterUser = (state) => state.user
export const { newUser } = registerSlice.actions

export default registerSlice.reducer