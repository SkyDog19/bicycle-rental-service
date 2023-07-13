import cls from './mainTitle.module.scss'

export const MainTitle = (props) => {
	const { title, color = '#000', mb = 20 } = props
	return <h1 color={color} className={cls.title} style={{ marginBottom: mb }}>{title}</h1>
}