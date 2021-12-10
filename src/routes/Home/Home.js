// COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import EmailForm from '../../components/EmailForm/EmailForm';
// STYLES
import StyledHome from './Home.styles.js';

function Home() {
	return (
		<StyledHome>
			<Navbar />
			<main>
				<h1>
					Unlimited movies, TV <br /> shows, and more.
				</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>

				<form>
					<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
					<EmailForm type='text' placeholder='Email address' />
				</form>
			</main>
		</StyledHome>
	);
}

export default Home;
