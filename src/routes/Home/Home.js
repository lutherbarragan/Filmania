// COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import EmailForm from '../../components/EmailForm/EmailForm';
import HomeSection from '../../components/HomeSection/HomeSection';
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

			<HomeSection>
				<div for='text'>
					<h1>Enjoy on your TV.</h1>
					<h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
				</div>
				<div for='image'>IMAGE</div>
			</HomeSection>

			<HomeSection>
				<div for='image'>IMAGE</div>
				<div for='text'>TEXT</div>
			</HomeSection>

			<HomeSection>
				<div for='text'>TEXT</div>
				<div for='image'>IMAGE</div>
			</HomeSection>

			<HomeSection>
				<div for='image'>IMAGE</div>
				<div for='text'>TEXT</div>
			</HomeSection>
		</StyledHome>
	);
}

export default Home;
