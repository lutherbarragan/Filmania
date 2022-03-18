// COMPONENTS
import Navbar from '../../components/Navbar/Navbar.styles';
import EmailForm from '../../components/EmailForm/EmailForm.styles';
import HomeSection from '../../components/HomeSection/HomeSection.styles';
import ScreenAnimation from '../../components/ScreenAnimation/ScreenAnimation.styles';
import PhoneAnimation from '../../components/PhoneAnimation/PhoneAnimation.styles';
import FaqItem from '../../components/FaqItem/FaqItem.styles';
// ASSETS
import TV_Frame from '../../assets/TV_frame.png';
import TV_Video from '../../assets/TV_video.m4v';
import Phone_Frame from '../../assets/phone_frame.jpg';
import Phone_show_cover from '../../assets/phone_show_cover.png';
import Phone_download_icon from '../../assets/Phone_download_icon.gif';
import PC_Frame from '../../assets/PC_frame.png';
import PC_Video from '../../assets/PC_video.m4v';
import Kids_Profile from '../../assets/Kids_profile_image.png';

// HELPERS
import { AbsolutePos, TextCenter } from '../../components/helpers/Helpers.style';

function Home({ className }) {
	const FAQ = {
		q1: {
			question: 'What is Filmania?',
			answers: [
				'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
				"You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
			],
		},
		q2: {
			question: 'How much does Netflix cost?',
			answers: [
				'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.',
			],
		},
		q3: {
			question: 'Where can I watch?',
			answers: [
				'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
				"You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
			],
		},
		q4: {
			question: 'How do I cancel?',
			answers: [
				'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
			],
		},
		q5: {
			question: 'What can I watch on Netflix?',
			answers: [
				'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
			],
		},
		q6: {
			question: 'Is Netflix good for kids?',
			answers: [
				'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
				'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
			],
		},
	};

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

			<HomeSection>
				<div className='image-container'>
					<img src={Kids_Profile} alt='Kids Profile' />
				</div>

				<div className='text-container'>
					<h1>Create profiles for kids.</h1>
					<h2>
						Send kids on adventures with their favorite characters in a space made just for them—free with
						your membership.
					</h2>
				</div>
			</HomeSection>

			<HomeSection className='faq-container' noFlex>
				<TextCenter>
					<h1>Frequently Asked Questions</h1>
				</TextCenter>

				<FaqItem question={FAQ.q1.question} answers={FAQ.q1.answers} />
				<FaqItem question={FAQ.q2.question} answers={FAQ.q2.answers} />
				<FaqItem question={FAQ.q3.question} answers={FAQ.q3.answers} />
				<FaqItem question={FAQ.q4.question} answers={FAQ.q4.answers} />
				<FaqItem question={FAQ.q5.question} answers={FAQ.q5.answers} />
				<FaqItem question={FAQ.q6.question} answers={FAQ.q6.answers} />
			</HomeSection>
		</div>
	);
}

export default Home;
