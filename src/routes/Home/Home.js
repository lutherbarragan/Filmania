// COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/Input/Input';
// STYLES
import Home from './Home.styles.js';

function Main() {
	return (
		<Home>
			<Navbar />
			<main>
				<h1>
					Unlimited movies, TV <br /> shows, and more.
				</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>

				<form>
					<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
					<Input type='text' placeholder='Email address' />
				</form>
			</main>
		</Home>
	);
}

export default Main;
