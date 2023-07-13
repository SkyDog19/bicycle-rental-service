import cls from './button.module.scss'

export const Button = (props) => {
	const { fnc, children, disabled } = props
	return <button disabled={disabled} onClick={fnc} className={cls.button}>{children}</button>
}