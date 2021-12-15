// ASSETS
import logo from '../../assets/filmania-logo.png';
// COMPONENTS
import Button from '../Button/Button.styles';

const Navbar = ({ className }) => (
	<nav className={className}>
		<img src={logo} alt='Filmania' />
		<Button to='/login'>Sign In</Button>
	</nav>
);

export default Navbar;
