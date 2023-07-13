import { LS_TOKEN_KEY } from '../providers/api/api.js'

export const useLocalStorage = (key = '', action, data) => {
	if (action === 'get') {
		return localStorage.getItem(key)
	}
	
	if (action === 'post') {
		localStorage.setItem(key, data)
	}
	
	if (action === 'remove') {
		localStorage.removeItem(LS_TOKEN_KEY)
	}
}