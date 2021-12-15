import { Link } from 'react-router-dom';

const Button = ({ className, to, children }) => {
	if (to) {
		return (
			<Link to={to}>
				<button className={className}>{children}</button>
			</Link>
		);
	} else {
		return <button className={className}>{children}</button>;
	}
};

export default Button;
