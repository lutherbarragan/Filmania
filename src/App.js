// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Main from './routes/Home/Home';
import Login from './routes/Login/Login';

// STYLES
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
