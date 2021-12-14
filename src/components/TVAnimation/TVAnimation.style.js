import styled from 'styled-components';

const StyledTVAnimation = styled.div`
	position: relative;
	overflow: hidden;

	img {
		position: relative;
		z-index: 2;
	}
	div[type='video-container'] {
		${props => console.log(props.max_width)}
		width: 100%;
		height: 100%;
		${props => (props.max_width ? { 'max-width': props.max_width } : '')};
		${props => (props.max_height ? { 'max-height': props.max_height } : '')};
		position: absolute;
		${props => (props.top ? { top: props.top } : '')};
		${props => (props.left ? { left: props.left } : '')};
		transform: translate(-50%, -50%);

		video {
			width: 100%;
			height: 100%;
		}
	}
`;

export default StyledTVAnimation;
