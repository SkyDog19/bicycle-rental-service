import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice/authSlice.js'
import userSlice from './slices/userSlice/userSlice.js'
import officersSlice from './slices/officersSlice/officersSlice.js'
import thefsSlice from './slices/thefsSlice/thefsSlice.js'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		user: userSlice,
		officers: officersSlice,
		thefs: thefsSlice
	}
})