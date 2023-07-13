import React from 'react'
import ReactDOM from 'react-dom/client'

import 'src/assets/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from 'src/providers/routes/MyRoutes.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			{/*<AuthProvider>*/}
			<Provider store={store}>
				<MyRoutes />
			</Provider>
			{/*</AuthProvider>*/}
		</BrowserRouter>
	</React.StrictMode>
)
