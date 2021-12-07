// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Main from './routes/Main/Main';
import Login from './routes/Login/Login';

// STYLES
import './assets/normalize.css';
import StyledApp from './App.styles.js';

function App() {
	return (
		<StyledApp>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</StyledApp>
	);
}

export default App;
