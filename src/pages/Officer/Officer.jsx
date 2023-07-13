import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import cls from './officer.module.scss'
import { OfficersRequests } from '../../providers/api/requests/OfficersRequests.js'

export const Officer = () => {
	const { officers } = useSelector(state => state.officers)
	const { id } = useParams()
	
	const [officer, setOfficer] = useState(null)
	
	const [email, setEmail] = useState(officer ? officer.email : '')
	const [firstName, setFirstName] = useState(officer ? officer.firstName : '')
	const [lastName, setLastName] = useState(officer ? officer.lastName : '')
	const [approved, setApproved] = useState(officer?.approved ? 'yes' : 'no')
	
	const [isEdit, setEdit] = useState(false)
	
	useEffect(() => {
		setOfficer(officers.filter(item => item._id === id)[0])
	}, [])
	// console.log(officers)
	// console.log(officer)
	
	// const onChangeFirst = (e) => {
	// 	setFirstName(e.target.value)
	// }
	// const onChangeLast = (e) => {
	// 	setLastName(e.target.value)
	// }
	// const onChangeEmail = (e) => {
	// 	setEmail(e.target.value)
	// }
	const buttonHandler = () => {
		if (isEdit) {
			OfficersRequests.updateOfficer({
				id: officer._id,
				firstName: firstName,
				lastName: lastName,
				approved: approved
			}).then(r => {
				setFirstName(r.firstName)
				setLastName(r.lastName)
				setEmail(r.email)
				setApproved(r.approved === true ? 'yes' : 'no')
				console.log('response', r)
				console.log(firstName)
			})
		}
		setEdit(!isEdit)
	}
	const radioHandler = (e) => {
		setApproved(e.target.value)
	}
	console.log(approved)
	if (!officer) return <div>Loading...</div>
	
	return (
		
		<div className={cls.root}>
			<h1>Тот самый сотрудник {officer?.firstName}</h1>
			<div className={cls.body}>
				<div className={cls.avatar}>
					<img src='/images/profile.png' alt='Avatar' />
				</div>
				<div className={cls.info}>
					<h3>Информация</h3>
					<div className={cls.infoBlock}>
						{
							isEdit ? (
								<>
									<input label={'Имя'} name={'firstName'} value={firstName}
												 onChange={(e) => setFirstName(e.target.value)}
												 type='text' />
									<input label={'Фамилия'} name={'lastName'} value={lastName}
												 onChange={(e) => setLastName(e.target.value)} type='text' />
									<input label={'Email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)}
												 type='email' />
								
								</>
							) : (
								<>
									<p>{`Имя: ${firstName || officer?.firstName || 'Нет имени'}`}</p>
									<p>{`Фамилия: ${lastName || officer?.lastName || 'Нет фамилии'} `}</p>
									<p>{`Электронная почта: ${email || officer?.email}`}</p>
								</>
							)
						}
						<span>Подтвержден:</span>
						<input
							disabled={approved === 'no' && isEdit === false && true}
							checked={approved === 'yes' && true}
							name={'approv'}
							id={'a1'}
							type='radio'
							value={'yes'}
							onChange={radioHandler} />
						<label htmlFor='a1'>Да</label>
						<input
							disabled={approved === 'yes' && isEdit === false && true}
							name={'approv'}
							checked={approved === 'no' && true}
							id={'a2'}
							type='radio'
							value={'no'}
							onChange={radioHandler} />
						<label htmlFor='a2'>Нет</label>
					</div>
					<button onClick={buttonHandler}>{isEdit ? 'Сохранить' : 'Редактировать'}</button>
				</div>
			
			</div>
		</div>
	
	)
}