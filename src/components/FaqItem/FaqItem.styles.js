import styled from 'styled-components';
import FaqItem from './FaqItem';

const StyledFaqItem = styled(FaqItem)`
	list-style: none;
	padding: 1em 2.2em 0.8em 1.2em;
	margin-bottom: 8px;
	font-size: 1.625rem;
	background-color: ${props => props.theme.gray};

	&:hover {
		cursor: pointer;
	}
`;

export default StyledFaqItem;
