// COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import EmailForm from '../../components/EmailForm/EmailForm';
import HomeSection from '../../components/HomeSection/HomeSection';
// ASSETS
import TV from '../../assets/tv.png';
import TVVideo from '../../assets/tv-video.m4v';

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
				
				<EmailForm />
			</main>

			<HomeSection>
				<div type='text-container'>
					<h1>Enjoy on your TV.</h1>
					<h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
				</div>

				<div type='image-container'>
					<div type='parent-animation-container'>
						<img src={TV} alt='tv frame' />

						<div type='video-container'>
							<video autoPlay muted loop>
								<source src={TVVideo} type='video/mp4' />
							</video>
						</div>
					</div>
				</div>
			</HomeSection>
		</StyledHome>
	);
}

export default Home;
