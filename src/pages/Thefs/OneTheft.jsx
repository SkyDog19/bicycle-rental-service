import { useNavigate, useParams } from 'react-router-dom'
import cls from './oneTheft.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ThefsRequests } from '../../providers/api/requests/ThefsRequests.js'

export const OneTheft = (props) => {
	const { className = '' } = props
	const { id } = useParams()
	const nav = useNavigate()
	
	const { cases } = useSelector(state => state.thefs)
	const [current, setCurrent] = useState()
	const [isEdit, setEdit] = useState(false)
	
	const [license, setLicense] = useState('')
	const [type, setType] = useState('')
	const [color, setColor] = useState('')
	const [fio, setFio] = useState('')
	
	console.log(isEdit)
	useEffect(() => {
		setCurrent(cases.filter(item => item._id === id)[0])
	}, [isEdit, cases])
	console.log(current)
	
	const buttonHandler = () => {
		if (isEdit) {
			ThefsRequests.editCase({
				id: current._id,
				licenseNumber: license || current?.license,
				ownerFullName: fio || current?.ownerFullName,
				type: type || current?.type,
				color: color || current?.color
			})
			setEdit(!isEdit)
		} else {
			setEdit(!isEdit)
		}
	}
	
	return (
		<div className={cls.root}>
			<h1>Случай кражи номер: {id}</h1>
			<div className={cls.body}>
				{
					isEdit ? (
						<>
							<input placeholder={'Номер лицензии'} value={license} onChange={(e) => setLicense(e.target.value)}
										 type='text' />
							<input placeholder={'Тип велосипеда'} value={type} onChange={(e) => setType(e.target.value)}
										 type='text' />
							<input placeholder={'Цвет велосипеда'} value={color} onChange={(e) => setColor(e.target.value)}
										 type='text' />
							<input placeholder={'ФИО заявителя'} value={fio} onChange={(e) => setFio(e.target.value)} type='text' />
						</>
					) : (
						<>
							<p>Статус: {current?.status}</p>
							<p>Номер лицензии: {current?.licenseNumber}</p>
							<p>Тип велосипеда: {current?.type}</p>
							<p>Цвет велосипеда: {current?.color || 'Цвет не указан'}</p>
							<p>ФИО заявителя: {current?.ownerFullName || 'Не указано'}</p>
							<p>Ответственный работник: {current?.officer || 'Не указан'}</p>
						</>
					)
				}
				<button onClick={() => {
					ThefsRequests.deleteCase(id)
					nav('/thefs')
				}}>Удалить
				</button>
				<button onClick={buttonHandler}>Изменить</button>
			</div>
		</div>
	
	)
}