import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import cls from './authPopup.module.scss'
import { useSelector } from 'react-redux'
import { AuthForm } from './AuthForm.jsx'


const AuthPopup = ({ isShow, setShow }) => {
	
	const [type, setType] = useState('login')
	
	const radioHandler = (e) => {
		setType(e.target.value)
	}
	
	const handleOverlayClick = (event) => {
		if (event.target === event.currentTarget) {
			setShow(false)
		}
	}
	
	const { isAuth } = useSelector(state => state.auth)
	
	useEffect(() => {
		console.log('hihhihihihi')
		if (isAuth) setShow(false)
	}, [isAuth, isShow])
	return (
		<>
			{isShow && (
				<div onMouseDown={handleOverlayClick} className={cls.overlay}>
					<div className={cls.wrapper}>
						<div className={cls.header}>
							<h2>{type === 'login' ? 'Авторизация' : 'Регистрация'}</h2>
							<AiOutlineClose
								onClick={() => setShow(false)}
								className={cls.close}
							/>
						</div>
						<div className={cls.radioButtons}>
							<input
								onChange={radioHandler}
								value='login'
								checked={type === 'login' && true}
								id='1'
								name='auth'
								type='radio'
							/>
							<label htmlFor='1'>Вход</label>
							<input
								onChange={radioHandler}
								value='register'
								checked={type === 'register' && true}
								id='2'
								name='auth'
								type='radio'
							/>
							<label htmlFor='2'>Регистрация</label>
						</div>
						<AuthForm type={type} />
					</div>
				</div>
			)}
		</>
	)
}

export default AuthPopup
