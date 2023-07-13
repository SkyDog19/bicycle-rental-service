import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cases: []
}

const thefsSlice = createSlice({
	name: 'thefs',
	initialState,
	reducers: {
		setThefs: (state, action) => {
			state.cases = action.payload
		},
		addCase: (state, action) => {
			state.cases = [...state.cases, action.payload]
		}
	}
})

export const { setThefs, addCase } = thefsSlice.actions

export default thefsSlice.reducer