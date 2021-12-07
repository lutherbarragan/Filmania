// MODULES
import { Link } from 'react-router-dom';

// COMPONENTS
import Header from '../../components/Header/Header';

// STYLES

function Main() {
	return (
		<div className='Main'>
			<Header />
			<h1>MAIN PAGE</h1>
			<Link to='/login'>LOGIN</Link>
		</div>
	);
}

export default Main;
