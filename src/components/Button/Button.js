import { Link } from 'react-router-dom';
import StyledButton from './Button.styles.js';

const Button = props => {
	if (props.to) {
		return (
			<Link to={props.to}>
				<StyledButton>{props.children}</StyledButton>
			</Link>
		);
	} else {
		return <StyledButton>{props.children}</StyledButton>;
	}
};

export default Button;
