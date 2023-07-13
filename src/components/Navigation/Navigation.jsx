import cls from './navigation.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navigation = (props) => {
	const {isAuth} = props
	console.log(isAuth)
	return <ul className={cls.navigation}>
		<li>
			<Link to={'/thefs'}>Случаи кражи</Link>
		</li>
		{
			isAuth && (
				<>
					<li>
						<Link to={'/officers'}>Наши сотрудники</Link>
					</li>
				<li><Link to={'/add-officer'}>Добавить сотрудника</Link></li>
				</>
			)
		}
	</ul>
}