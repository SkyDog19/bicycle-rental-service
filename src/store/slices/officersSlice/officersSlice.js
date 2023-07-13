import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	officers: []
}

const officersSlice = createSlice({
	name: 'officers',
	initialState,
	reducers: {
		setOfficers: (state, action) => {
			state.officers = action.payload
		}
	}
})

export const { setOfficers } = officersSlice.actions

export default officersSlice.reducer