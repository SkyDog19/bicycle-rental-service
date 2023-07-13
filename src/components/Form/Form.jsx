import cls from './form.module.scss'
import { Field } from '../ui/Field/Field.jsx'
import { Button } from '../ui/Button/Button.jsx'

export const Form = (props) => {
	const { onSubmit, btnLabel, inputs } = props
	
	
	const renderInp = () => inputs.map(item => {
		return (
			<>
				<Field
					key={item.label}
					label={item.label}
					type={item.type}
					errorText={item.errorText}
					variant={'outlined'}
					value={item.value}
					onChange={item.setValue}
				/>
				<span className={cls.error}>{item.errorText}</span>
			</>
		)
	})
	
	
	return (
		<form onSubmit={onSubmit} className={cls.form}>
			{renderInp()}
			<Button type='submit'>
				{btnLabel}
			</Button>
		</form>
	)
}