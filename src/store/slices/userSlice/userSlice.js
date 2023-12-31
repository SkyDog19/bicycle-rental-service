import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	email: '',
	firstName: '',
	lastName: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
		}
	}
})

export const { setUser } = userSlice.actions

export default userSlice.reducer