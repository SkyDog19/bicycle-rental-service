import cls from './officers.module.scss'
import { OfficersRequests } from '../../providers/api/requests/OfficersRequests.js'
import { useDispatch, useSelector } from 'react-redux'
import { setOfficers } from '../../store/slices/officersSlice/officersSlice.js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Table } from '../../components/Table/Table.jsx'

export const Officers = (props) => {
	const {} = props
	
	const dispatch = useDispatch()
	const nav = useNavigate()
	
	const { officers } = useSelector(state => state.officers)
	
	const updateOfficers = () => {
		OfficersRequests.getAll().then(r => {
			console.log('r', r)
			dispatch(setOfficers(r))
		})
	}
	
	console.log('render')
	useEffect(() => updateOfficers(), [])
	
	return (
		<div className={cls.root}>
			<h1>Сотрудники</h1>
			<div className={cls.tableContainer}>
				<Table items={officers} fnc={updateOfficers} />
			</div>
		</div>
	)
}