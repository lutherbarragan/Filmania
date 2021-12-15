import Section from './HomeSection.styles.js';

const HomeSection = props => (
	<Section>
		<div type='flex-container'>{props.children}</div>
	</Section>
);

export default HomeSection;
