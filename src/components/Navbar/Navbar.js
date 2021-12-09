// ASSETS
import logo from '../../assets/filmania-logo.png';
// COMPONENTS
import Button from '../Button/Button';
// STYLES
import StyledNavbar from './Navbar.styles.js';

const Navbar = () => (
	<StyledNavbar>
		<img src={logo} alt='Filmania' />
		<Button to='/login'>Sign In</Button>
	</StyledNavbar>
);

export default Navbar;
