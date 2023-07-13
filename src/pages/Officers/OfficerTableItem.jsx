import { BsFillTrashFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { OfficersRequests } from '../../providers/api/requests/OfficersRequests.js'
import { setOfficers } from '../../store/slices/officersSlice/officersSlice.js'
import { useDispatch } from 'react-redux'

export const OfficerTableItem = (props) => {
	const { item } = props
	const dispatch = useDispatch()
	console.log(item._id)
	const nav = useNavigate()
	
	const onTrashClick = () => {
		OfficersRequests.deleteOfficer(item._id)
		OfficersRequests.getAll().then(r => {
			console.log('r', r)
			dispatch(setOfficers(r))
		})
	}
	
	return (<tr key={item._id}>
		<td onClick={() => nav(`/officer/${item._id}`)}>{item.email}</td>
		<td onClick={() => nav(`/officer/${item._id}`)}>{item.firstName}</td>
		<td onClick={() => nav(`/officer/${item._id}`)}>{item.lastName}</td>
		<td>{item.approved === false ? 'Не подтвержден' : 'Подтвержден'}</td>
		<td style={{ cursor: 'pointer' }}><BsFillTrashFill onClick={onTrashClick} /></td>
	</tr>)
}