// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Main from './routes/Main/Main';
import Login from './routes/Login/Login';

// STYLES
// STYLES
import './assets/normalize.css';
import AppDiv from './App.styles.js';

function App() {
	return (
		<AppDiv>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</AppDiv>
	);
}

export default App;
