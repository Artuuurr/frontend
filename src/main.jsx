import React from 'react'
import ReactDOM from 'react-dom/client'
import Test from './components/test/test'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<header className='header'>
			<Test />
		</header>
		<main></main>
		<footer></footer>
	</React.StrictMode>
)
