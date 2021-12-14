import StyledTVAnimation from './TVAnimation.style';

const TVAnimation = props => (
	<StyledTVAnimation {...props}>
		<img src={props.TV_Frame} alt='tv frame' />

		<div type='video-container'>
			<video autoPlay muted loop>
				<source src={props.TV_Video} type='video/mp4' />
			</video>
		</div>
	</StyledTVAnimation>
);

export default TVAnimation;
