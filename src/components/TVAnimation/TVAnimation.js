const TVAnimation = ({ className, TV_Frame, TV_Video }) => (
	<div className={className}>
		<img src={TV_Frame} alt='tv frame' />

		<div className='video-container'>
			<video autoPlay muted loop>
				<source src={TV_Video} type='video/mp4' />
			</video>
		</div>
	</div>
);

export default TVAnimation;
