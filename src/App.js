// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// ROUTES
import Home from './routes/Home/Home.styles';
import Login from './routes/Login/Login';

// STYLE FILES
import './assets/normalize.css';
import './assets/fonts.css';
import './assets/styles.css';

const THEME = {
	mainRed: '#e50914',
	secondaryRed: '#f40612',
	white: '#fff',
	black: '#000',
	darkGray: '#222',
	lightGray: 'rgba(255,255,255, 0.25)',
	blue: '#0071eb',
};

function App() {
	return (
		<ThemeProvider theme={THEME}>
			<div>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
