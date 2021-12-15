// COMPONENTS
import Navbar from '../../components/Navbar/Navbar.styles';
import EmailForm from '../../components/EmailForm/EmailForm.styles';
import HomeSection from '../../components/HomeSection/HomeSection.styles';
import TVAnimation from '../../components/TVAnimation/TVAnimation.styles';
// ASSETS
import TV_Frame_01 from '../../assets/tv.png';
import TV_Video_01 from '../../assets/tv-video.m4v';

// HELPERS
import { AbsolutePos } from '../../components/helpers/Helpers.style';

function Home({ className }) {
	return (
		<div className={className}>
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
		</div>
	);
}

export default Home;
