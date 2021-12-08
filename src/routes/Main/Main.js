// MODULES
import { Link } from 'react-router-dom';

// COMPONENTS

// STYLES
import StyledMain from './Main.styles.js';

function Main() {
	return (
		<StyledMain>
			<Link to='/login'>LOGIN</Link>
		</StyledMain>
	);
}

export default Main;
