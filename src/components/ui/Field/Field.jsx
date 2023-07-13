import { TextField } from '@mui/material'

export const Field = (props) => {
	const { label, type, value, setValue, required } = props
	
	console.log(value)
	return (
		<TextField
			type={type}
			variant='outlined'
			label={label}
			color='primary'
			required={required}
			
			onChange={(e) => setValue(e.target.value)}
			value={value}
		/>
	)
}
