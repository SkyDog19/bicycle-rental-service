import { $axios, API_URL } from '../api.js'

const url = `${API_URL}/cases`

export const ThefsRequests = {
	getAll: async () => {
		try {
			const res = await $axios.get(url)
			return res.data.data
		} catch (e) {
			console.log(e)
		}
	},
	createCase: async (body) => {
		try {
			const res = await $axios.post(url, body)
			return res.data.data
		} catch (e) {
		
		}
	},
	createCasePub: async (body) => {
		try {
			const res = await $axios.post(`${API_URL}/public/report`, body)
			console.log(res)
			return res.data.data
		} catch (e) {
			console.log(e)
		}
	},
	editCase: async (body) => {
		try {
			const res = await $axios.put(`${url}/${body.id}`, body)
			console.log(res)
		} catch (e) {
			console.log(e)
		}
	},
	deleteCase: async (id) => {
		try {
			const res = await $axios.delete(`${url}/${id}`)
			console.log(res)
		} catch (e) {
		
		}
	},
	getCase: async (id) => {
		try {
			const res = await $axios.get(`${url}/${id}`)
		} catch (e) {
		
		}
	}
}