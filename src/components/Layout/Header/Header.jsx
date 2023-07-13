import cls from './header.module.scss'
import { Link } from 'react-router-dom'
import { LiaBicycleSolid } from 'react-icons/lia'
import { Navigation } from '../../Navigation/Navigation.jsx'
import { BiUserCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../ui/Button/Button.jsx'
import {useEffect, useState} from 'react'
import AuthPopup from '../../AuthPopup/AuthPopup.jsx'
import { setAuth } from '../../../store/slices/authSlice/authSlice.js'
import { useLocalStorage } from '../../../hooks/useLocalStorage.js'
import { LS_TOKEN_KEY } from '../../../providers/api/api.js'

export const Header = (props) => {
	const dispatch = useDispatch()
	
	// const [isLogged, setLogged] = useState(useLocalStorage('auth', 'get') === 'true')
	
	const isLog = JSON.parse(localStorage.getItem('auth'))
	
	// useEffect(() => {
	// 	useLocalStorage()
	// }, [isLogged])
	
	const [showPop, setShow] = useState(false)
	const { isAuth } = useSelector(state => state.auth)
	
	
	console.log('auth', isAuth)
	const handleLogout = () => {
		dispatch(setAuth(false))
		useLocalStorage(LS_TOKEN_KEY, 'remove')
		useLocalStorage('auth', 'post', false)
	}

	
	return <header className={cls.header}>
		<div className={cls.logo}>
			<Link to={'/'}>
				<LiaBicycleSolid />
			</Link>
		</div>
		<div className={cls.navigation}>
			<Navigation isAuth={isLog} />
		</div>
		<div className={cls.profile}>
			{isLog ? (
				<Button fnc={handleLogout}>Выход</Button>
			) : (
				<Button fnc={() => setShow(true)}>Вход</Button>
			)}
			<BiUserCircle />
		</div>
		<AuthPopup isShow={showPop} setShow={setShow} />
	</header>
}