import { $axios, API_URL, LS_TOKEN_KEY } from '../api.js'
import { useLocalStorage } from '../../../hooks/useLocalStorage.js'

const url = `${API_URL}/auth`
const clientId = '767f1a0c-46df-4f7f-a9b9-1c66fbd2eed4'

export const AuthRequests = {
	signUp: async (body) => {
		try {
			const { data } = await $axios.post(url + '/sign_up', {
				email: body.email,
				password: body.password,
				clientId: clientId
			})
			console.log('REGISTER', data)
			return data
		} catch (e) {
			console.log(e)
		}
	},
	signIn: async (body) => {
		try {
			const { data } = await $axios.post(url + '/sign_in', {
				email: body.email,
				password: body.password
			})
			console.log(data)
			console.log(data.data.token)
			
			if (data.data.token) {
				useLocalStorage(LS_TOKEN_KEY, 'post', data.data.token)
				useLocalStorage('auth', 'post', true)
			}
			
			
			return data.data.user
			
		} catch (e) {
			await console.log(e.response.data.message)
			return {
				error: e.response.data.message
			}
		}
	},
	auth: async () => {
		try {
			const { data } = await $axios.get(url)
			console.log(data)
			return data.data
			
		} catch (e) {
			console.log(e)
		}
	}
}