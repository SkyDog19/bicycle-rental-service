import { Header } from 'src/components/Layout/Header/Header'
import { Footer } from 'src/components/Layout/Footer/Footer.jsx'
import { Routes, useLocation } from 'react-router-dom'
import cls from './layout.module.scss'

export const Layout = (props) => {
	const { children } = props
	
	const { pathname } = useLocation()
	
	return (
		<>
			<Header />
			<main>
				<div className={cls.homeBg}></div>
				<div className={'app-container'}>
					<Routes>
						{children}
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	)
}