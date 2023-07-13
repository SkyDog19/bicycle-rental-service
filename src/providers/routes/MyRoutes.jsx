import { Home } from 'src/pages/Home/Home'
import { Route } from 'react-router-dom'
import { Layout } from 'src/components/Layout/Layout.jsx'
import { Officers } from '../../pages/Officers/Officers'
import { Officer } from '../../pages/Officer/Officer'
import { Authorization } from '../../pages/Authorization/Authorization'
import { AllThefs } from '../../pages/Thefs/AllThefs'
import { OneTheft } from '../../pages/Thefs/OneTheft.jsx'
import { AddCase } from '../../pages/Thefs/AddCase'
import {AddOfficer} from "../../pages/Officer/addOfficer";

export const paths = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/officers',
		element: <Officers />
	},
	{
		path: '/officer/:id',
		element: <Officer />
	},
	{
		path: '/auth',
		element: <Authorization />
	},
	{
		path: '/thefs',
		element: <AllThefs />
	},
	{
		path: '/thefs/:id',
		element: <OneTheft />
	},
	{
		path: '/officer-create',
		element: <Authorization />
	},
	{
		path: '/add-case',
		element: <AddCase />
	},
	{
		path: '/add-officer',
		element: <AddOfficer />
	}
]

export const MyRoutes = () => {
	const renderPage = () => (
		paths.map(({ path, element }) => (
			<Route key={path} path={path} element={element} />
		))
	)
	
	return (
		<Layout>
			{renderPage()}
		</Layout>
	)
}