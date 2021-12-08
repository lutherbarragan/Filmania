import { Link } from 'react-router-dom';
import StyledButton from './Button.styles.js';

const Button = () => (
	<Link to='/login'>
		<StyledButton>Sign In</StyledButton>
	</Link>
);

export default Button;
