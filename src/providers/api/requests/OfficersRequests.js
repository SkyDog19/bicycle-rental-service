import { $axios, API_URL } from '../api.js'

const url = `${API_URL}/officers`

export const OfficersRequests = {
	createOfficer: async (body) => {
		try {
			const res = await $axios.post(url, {
				email: body.email,
				password: body.password,
				firstName: body.firstName || '',
				lastName: body.lastName || '',
				approved: body.approved || false
			})
			console.log(res)
		} catch (e) {
			console.log(e)
		}
	},
	updateOfficer: async (body) => {
		try {
			console.log('я body', body)
			const { data } = await $axios.put(`${url}/${body.id}`, body)
			console.log('я запрос', data)
			return data.data
		} catch (e) {
			console.log('я ошибка запроса', e)
		}
	},
	deleteOfficer: async (id) => {
		try {
			const res = await $axios.delete(`${url}/${id}`)
		} catch (e) {
		
		}
	},
	getAll: async () => {
		try {
			const { data, status } = await $axios.get(url)
			console.log(data)
			console.log(status)
			console.log(data.officers[0]._id)
			return data.officers
		} catch (e) {
		
		}
	},
	getOfficer: async (id) => {
		try {
			const { data } = await $axios.get(url)
		} catch (e) {
		
		}
	}
}