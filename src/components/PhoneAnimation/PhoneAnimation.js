const PhoneAnimation = ({ className, Phone_Frame, Show_cover, Download_icon }) => (
	<div className={className}>
		<img src={Phone_Frame} alt='Phone frame' />

		<div className='download-container'>
			<img src={Show_cover} alt='Show Cover' />
			<div>
				<p>Stranger Things</p>
				<span>Downloading...</span>
			</div>
			<img className='download-icon' src={Download_icon} alt='Download Icon' />
		</div>
	</div>
);

export default PhoneAnimation;
