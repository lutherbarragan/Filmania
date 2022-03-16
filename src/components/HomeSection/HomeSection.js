const HomeSection = ({ className, children, noFlex }) => (
	<section className={className}>
		<div className={noFlex ? '' : 'flex-container'}>{children}</div>
	</section>
);

export default HomeSection;
