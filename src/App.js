// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Main from './routes/Main/Main';
import Login from './routes/Login/Login';

// STYLES
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
