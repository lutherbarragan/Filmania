// COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import EmailForm from '../../components/EmailForm/EmailForm';
import HomeSection from '../../components/HomeSection/HomeSection';
import TVAnimation from '../../components/TVAnimation/TVAnimation';
// ASSETS
import TV_Frame_01 from '../../assets/tv.png';
import TV_Video_01 from '../../assets/tv-video.m4v';

// HELPERS
import { AbsolutePos } from '../../components/helpers/Helpers.style';

// STYLES
import StyledHome from './Home.styles.js';

function Home() {
	return (
		<StyledHome>
			<Navbar />

			<main>
				<AbsolutePos top='55%' left='50%'>
					<h1>
						Unlimited movies, TV <br /> shows, and more.
					</h1>

					<h2>Watch anywhere. Cancel anytime.</h2>

					<EmailForm />
				</AbsolutePos>
			</main>

			<HomeSection>
				<div type='text-container'>
					<h1>Enjoy on your TV.</h1>
					<h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
				</div>

				<div type='image-container'>
					<TVAnimation
						TV_Frame={TV_Frame_01}
						TV_Video={TV_Video_01}
						max_width='74%'
						max_height='55%'
						top='47.5%'
						left='50%'
					/>
				</div>
			</HomeSection>
		</StyledHome>
	);
}

export default Home;
