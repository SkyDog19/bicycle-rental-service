import cls from './addCase.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { OfficersRequests } from '../../providers/api/requests/OfficersRequests.js'
import { setOfficers } from '../../store/slices/officersSlice/officersSlice.js'
import { ThefsRequests } from '../../providers/api/requests/ThefsRequests.js'
import { addCase } from '../../store/slices/thefsSlice/thefsSlice.js'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import { LS_TOKEN_KEY } from '../../providers/api/api.js'

export const AddCase = (props) => {
	const dispatch = useDispatch()
	
	const [fio, setFio] = useState('')
	const [license, setLicense] = useState('')
	const [color, setColor] = useState('')
	const [date, setDate] = useState('')
	const [type, setType] = useState('')
	const [off, setOff] = useState('')
	const [clientId, setClientId] = useState('')
	
	useEffect(() => {
		OfficersRequests.getAll().then(r => {
			console.log('r', r)
			dispatch(setOfficers(r))
		})
	}, [])
	
	const submitHandler = (e) => {
		e.preventDefault()
		if (!useLocalStorage(LS_TOKEN_KEY, 'get')) {
			ThefsRequests.createCasePub({
				clientId: clientId,
				licenseNumber: license,
				ownerFullName: fio,
				type: type,
				color: color,
				date: date,
				officer: off
			}).then(r => {
				dispatch(addCase(r))
				console.log(r)
			})
		} else {
			ThefsRequests.createCase({
				licenseNumber: license,
				ownerFullName: fio,
				type: type,
				color: color,
				date: date,
				officer: off
			}).then(r => {
				dispatch(addCase(r))
				console.log(r)
			})
		}
		
	}
	
	const { officers } = useSelector(state => state.officers)
	console.log(officers)
	
	return <div className={cls.root}>
		<h1>Добавить случай кражи</h1>
		<div className={cls.body}>
			<form onSubmit={submitHandler}>
				<div className={cls.option}>
					<span>ФИО арендатора</span>
					<input value={fio} onChange={(e) => setFio(e.target.value)} type='text' />
				</div>
				<div className={cls.option}>
					<span>Номер лицензии</span>
					<input value={license} onChange={(e) => setLicense(e.target.value)} type='text' />
				</div>
				<div className={cls.option}>
					<span>Тип велосипеда</span>
					<select onChange={(e) => setType(e.target.value)} name='type' id='type'>
						<option value='sport'>Спортивный</option>
						<option value='general'>Стандарт</option>
					</select>
				</div>
				<div className={cls.option}>
					<span>Цвет</span>
					<input value={color} onChange={(e) => setColor(e.target.value)} type='text' />
				</div>
				<div className={cls.option}>
					<span>Дата кражи</span>
					<input value={date} onChange={(e) => setDate(e.target.value)} type='date' />
				</div>
				<div className={cls.option}>
					<span>Ответственный сотрудник</span>
					<select onChange={e => setOff(e.target.value)} name='officer' id='off'>
						{
							officers.map((item, index) => (
								<option key={index} value={item._id}>{item.firstName || `Сотрудник: ${index}`}</option>
							))
						}
					</select>
				</div>
				<div className={cls.option}>
					<span>ClientId</span>
					<input value={clientId} onChange={(e) => setClientId(e.target.value)} type='text' />
				</div>
				<button type={'submit'}>Отправить</button>
			</form>
		</div>
	</div>
}