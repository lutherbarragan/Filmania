// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// ROUTES
import Main from './routes/Home/Home';
import Login from './routes/Login/Login';

// STYLES
import StyledApp from './App.styles.js';

const THEME = {
	mainRed: '#e50914',
	secondaryRed: '#f40612',
	white: '#fff',
	black: '#000',
	darkGray: '#222',
};

function App() {
	return (
		<ThemeProvider theme={THEME}>
			<StyledApp>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</BrowserRouter>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
