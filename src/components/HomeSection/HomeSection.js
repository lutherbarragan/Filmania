import StyledHomeSection from './HomeSection.styles.js';

const HomeSection = props => (
	<StyledHomeSection>
		<div type='flex-container'>{props.children}</div>
	</StyledHomeSection>
);

export default HomeSection;
