import StyledNavbar from './Navbar.styles.js';
import logo from '../../assets/filmania-logo.png';
// COMPONENTS
import StyledButton from '../Button/Button';

const Navbar = () => (
	<StyledNavbar>
		<img src={logo} alt='Filmania' />
		<StyledButton to='/login'>Sign In</StyledButton>
	</StyledNavbar>
);

export default Navbar;
