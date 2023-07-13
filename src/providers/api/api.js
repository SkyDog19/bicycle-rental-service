import axios from 'axios'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'

export const API_URL = 'https://sf-final-project-be.herokuapp.com/api'
export const LS_TOKEN_KEY = 'perl'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: useLocalStorage(LS_TOKEN_KEY, 'get') ? `Bearer ${useLocalStorage(LS_TOKEN_KEY, 'get')}` : ''
	}
})
