import cls from './table.module.scss'
import { Button } from '../ui/Button/Button.jsx'
import { OfficerTableItem } from '../../pages/Officers/OfficerTableItem.jsx'

export const Table = (props) => {
	const { items, fnc } = props

	return <table className={cls.table}>
		<thead>
		<tr>
			<td>Email</td>
			<td>Имя</td>
			<td>Фамилия</td>
			<td>Статус</td>
			<td><Button fnc={fnc}>Обновить</Button></td>
		</tr>
		</thead>
		<tbody>
		{
			items.map(item => (
				<OfficerTableItem key={item._id} item={item} />
			))
		}
		</tbody>
	</table>
}