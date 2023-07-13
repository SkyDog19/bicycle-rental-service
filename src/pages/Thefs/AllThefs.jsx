import cls from './allThefs.module.scss'
import { useEffect } from 'react'
import { ThefsRequests } from '../../providers/api/requests/ThefsRequests.js'
import { useDispatch, useSelector } from 'react-redux'
import { setThefs } from '../../store/slices/thefsSlice/thefsSlice.js'
import { useNavigate } from 'react-router-dom'

export const AllThefs = () => {
	const dispatch = useDispatch()
	const nav = useNavigate()
	
	useEffect(() => {
		ThefsRequests.getAll().then(r => {
			console.log(r)
			dispatch(setThefs(r))
		})
	}, [])
	
	const { cases } = useSelector(state => state.thefs)
	console.log('cases', cases)
	return (<div className={cls.root}>
		<div className={cls.head}>
			<h1 className={cls.title}>Список случаев кражи</h1>
			<button onClick={() => nav('/add-case')} className={cls.buttonAdd}>Добавить случай</button>
		</div>
		<div className={cls.body}>
			<table>
				<thead>
				<tr>
					<td>Статус</td>
					<td>ФИО арендатора</td>
					<td>Номер лицензии</td>
					<td>Тип велосипеда</td>
					<td>Цвет</td>
					<td>Дата кражи</td>
					<td>Ответственный сотрудник</td>
				</tr>
				</thead>
				<tbody>
				{
					cases.map(item => (
						<tr onClick={() => nav(`/thefs/${item._id}`)} key={item._id}>
							<td>{item.status}</td>
							<td>{item.ownerFullName}</td>
							<td>{item.licenseNumber}</td>
							<td>{item.type}</td>
							<td>{item.color || 'Цвет'}</td>
							<td>{item.date || 'Неизвестно'}</td>
							<td>{item.officer || 'Неизвестно'}</td>
						</tr>
					))
				}
				</tbody>
			</table>
		
		</div>
	</div>)
}