import cls from './addOfficer.module.scss'
import {useState} from "react";
import {OfficersRequests} from "../../providers/api/requests/OfficersRequests.js";

export const AddOfficer = (props) => {
  const {className = ''} = props
	
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	
	const submitHandler = (e) => {
	  e.preventDefault()
	  OfficersRequests.createOfficer({
		  email: email,
		  password: pass,
		  firstName: firstName,
		  lastName: lastName
	  })
	}
	
  return (
	  <div className={cls.root}>
		  <h1>Добавить сотрудника</h1>
		  <form onSubmit={submitHandler}>
			  <div className={cls.inputBlock}>
				  <span>Имя</span>
				  <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
			  </div>
			  <div className={cls.inputBlock}>
				  <span>Фамилия</span>
				  <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
			  </div>
			  <div className={cls.inputBlock}>
				  <span>Email</span>
				  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
			  </div>
			  <div className={cls.inputBlock}>
				  <span>Пароль</span>
				  <input value={pass} onChange={(e) => setPass(e.target.value)} type="text"/>
			  </div>
			  <button type={'submit'}>Создать</button>
		  </form>
  </div>
  );
};