import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button)`
	display: inline-block;
	font-size: 1rem;
	font-weight: 400;
	line-height: normal;
	padding: 7px 17px;
	border-radius: 3px;
	color: ${props => props.theme.white};
	background-color: ${props => props.theme.mainRed};
	border-style: none;

	&:hover {
		cursor: pointer;
		background-color: ${props => props.theme.secondaryRed};
	}
`;

export default StyledButton;
