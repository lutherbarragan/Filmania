// MODULES
import { Link } from 'react-router-dom';

// STYLES
import './Login.css';

function Login() {
	return (
		<div className='Login'>
			<h1>LOGIN PAGE</h1>
			<Link to='/'>HOME</Link>
		</div>
	);
}

export default Login;
