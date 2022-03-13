// COMPONENTS
import Navbar from '../../components/Navbar/Navbar.styles';
import EmailForm from '../../components/EmailForm/EmailForm.styles';
import HomeSection from '../../components/HomeSection/HomeSection.styles';
import ScreenAnimation from '../../components/ScreenAnimation/ScreenAnimation.styles';
import PhoneAnimation from '../../components/PhoneAnimation/PhoneAnimation.styles';
// ASSETS
import TV_Frame from '../../assets/TV_frame.png';
import TV_Video from '../../assets/TV_video.m4v';
import Phone_Frame from '../../assets/phone_frame.jpg';
import Phone_show_cover from '../../assets/phone_show_cover.png';
import Phone_download_icon from '../../assets/Phone_download_icon.gif';
import PC_Frame from '../../assets/PC_frame.png';
import PC_Video from '../../assets/PC_video.m4v';

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
				<div className='text-container'>
					<h1>Enjoy on your TV.</h1>
					<h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
				</div>

				<div className='image-container'>
					<ScreenAnimation
						TV_Frame={TV_Frame}
						TV_Video={TV_Video}
						max_width='74%'
						max_height='55%'
						top='47.5%'
						left='50%'
					/>
				</div>
			</HomeSection>

			<HomeSection>
				<div className='image-container'>
					<PhoneAnimation
						Phone_Frame={Phone_Frame}
						Show_cover={Phone_show_cover}
						Download_icon={Phone_download_icon}
					/>
				</div>

				<div className='text-container'>
					<h1>Download your shows to watch offline.</h1>
					<h2>Save your favorites easily and always have something to watch.</h2>
				</div>
			</HomeSection>

			<HomeSection>
				<div className='text-container'>
					<h1>Watch everywhere.</h1>
					<h2>
						Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
					</h2>
				</div>

				<div className='image-container'>
					<ScreenAnimation
						TV_Frame={PC_Frame}
						TV_Video={PC_Video}
						max_width='63%'
						max_height='47%'
						top='34%'
						left='50%'
					/>
				</div>
			</HomeSection>
		</div>
	);
}

export default Home;
