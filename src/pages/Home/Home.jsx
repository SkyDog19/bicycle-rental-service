import cls from './home.module.scss'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import {useEffect} from "react";

export const Home = (props) => {
	const { className = '' } = props
	
	return (
		<>
			<div className={cls.homeBg} />
			<div className={cls.home}>
				<MainTitle title={'Велопрокат Иркутск'} mb={25} />
				<p className={cls.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fuga ipsa laudantium modi non officiis
					perferendis, possimus quasi repellendus temporibus!
				</p>
			</div>
		</>
	)
}