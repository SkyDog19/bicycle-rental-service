import { AuthRequests } from '../../providers/api/requests/AuthRequests.js'
import {useEffect, useState} from 'react'
import { Field } from '../ui/Field/Field.jsx'
import { Button } from '../ui/Button/Button.jsx'

import cls from './authPopup.module.scss'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice/userSlice.js'
import { setAuth } from '../../store/slices/authSlice/authSlice.js'
import {useLocalStorage} from "../../hooks/useLocalStorage.js";

export const AuthForm = ({ type }) => {
	const dispatch = useDispatch()
	
	const [email, setEmail] = useState('')
	const [password, setPass] = useState('')
	
	const [passError, setPassError] = useState(true)
	const passwordError = 'Пароль должен содержать от 3 до 12 символов'
	
	const [requestError, setRequestError] = useState('')
	console.log(password)
	console.log(email)
	// if (isLoading) return <Spinner />
	const onSubmit = (event) => {
		event.preventDefault()
		
		const t = event.target
		
		if (type === 'login') {
			AuthRequests.signIn({
				email: t[0].value,
				password: t[2].value
			}).then(data => {
				if (data.error) {
					setRequestError(data.error)
				} else {
					setRequestError('')
					dispatch(setAuth(true))
					dispatch(setUser({
						email: data.email,
						firstName: data.firstName || '',
						lastName: data.lastName || ''
					}))
				}
			}).catch(e => {
				console.log(e)
			})
		}
		
		if (type === 'register') {
			AuthRequests.signUp({
				email: t[0].value,
				password: t[2].value
			}).then(data => {
				alert('Успешно!')
				console.log('PROMISE', data)
			}).catch(e => {
				console.log(e)
			})
		}
		console.log({
			email: t[0].value,
			password: t[2].value
		})
		console.log(type)
	}
	
	
	return (
		<form onSubmit={onSubmit} className={cls.form}>
			<span className={cls.error}>{passError && passwordError}</span>
			<Field required value={email} setValue={setEmail} type={'email'} label={'Email'} />
			<span className={cls.error}>{passError && passwordError}</span>
			<Field required value={password} setValue={setPass} type={'password'} label={'Пароль'} />
			<span className={cls.error}>{requestError}</span>
			<Button disabled={email.length === 0 || (password.length < 3 || password.length > 12) ? true : false}
							type='submit'>
				{type === 'login' ? 'Войти' : 'Зарегистрироваться'}
			</Button>
		</form>
	)
}
