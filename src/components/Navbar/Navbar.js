// ASSETS
import logo from '../../assets/filmania-logo.png';
// COMPONENTS
import Button from '../Button/Button.styles';
// STYLES
import Nav from './Navbar.styles.js';

const Navbar = () => (
	<Nav>
		<img src={logo} alt='Filmania' />
		<Button to='/login'>Sign In</Button>
	</Nav>
);

export default Navbar;
