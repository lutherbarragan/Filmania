import StyledNavbar from './Navbar.styles.js';
import logo from '../../assets/filmania-logo.png';

const Navbar = () => (
	<StyledNavbar>
		<img src={logo} alt='Filmania' />
		<button>Sign In</button>
	</StyledNavbar>
);

export default Navbar;
