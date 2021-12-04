// MODULES
import { Link } from 'react-router-dom';

// STYLES
import './Main.css';

function Main() {
	return (
		<div className='Main'>
			<h1>MAIN PAGE</h1>
			<Link to='/login'>LOGIN</Link>
		</div>
	);
}

export default Main;
