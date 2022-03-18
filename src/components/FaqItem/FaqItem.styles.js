import styled from 'styled-components';
import FaqItem from './FaqItem';

const StyledFaqItem = styled(FaqItem)`
	margin-bottom: 8px;
	font-size: 1.625rem;
	background-color: ${props => props.theme.gray};
	user-select: none;

	&:hover {
		cursor: pointer;
	}

	.question,
	.answers {
		padding: 1em 2.2em 0.8em 1.2em;
	}

	.question {
		border-bottom: 1px solid black;
	}

	.answers {
		display: none;
		transition: all 2s ease-in-out;

		p {
			margin-bottom: 1em;
		}
	}
`;

export default StyledFaqItem;
