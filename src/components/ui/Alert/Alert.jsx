import cn from 'clsx'
import React from 'react'

import s from './alert.module.scss'

interface IAlertProps {
	type?: 'success' | 'error' | 'warning'
	text: string
}

const Alert: React.FC<IAlertProps> = ({ type = 'success', text }) => {
	return <div className={cn(s.alert, s[type])}>{text}</div>
}

export default Alert
