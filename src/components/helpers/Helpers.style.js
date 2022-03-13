import styled from 'styled-components';

export const AbsolutePos = styled.div`
	position: absolute;
	${props => (props.top ? { top: props.top } : '')};
	${props => (props.right ? { right: props.right } : '')};
	${props => (props.bottom ? { bottom: props.bottom } : '')};
	${props => (props.left ? { left: props.left } : '')};
	transform: translate(-50%, -50%);
`;

export const TextCenter = styled.div`
	width: 100%;
	text-align: center;
`;
