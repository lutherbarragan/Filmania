import styled from 'styled-components';
import HomeSection from './HomeSection';

const StyledHomeSection = styled(HomeSection)`
	width: 100%;
	height: 48vh;
	border-bottom: 1vh solid ${props => props.theme.darkGray};
	color: ${props => props.theme.white};

	.flex-container {
		height: 100%;
		margin: 1rem auto;
		max-width: 1100px;
		display: flex;
		align-items: center;

		.text-container,
		.image-container {
			display: inline-block;
		}
		/* FIRST CHILD DIV SHOULD HAVE 3REM MARGIN RIGHT */

		.text-container {
			width: 52%;
			line-height: 1.4;

			h1 {
				font-size: 3.125rem;
				font-weight: 600;
				margin-bottom: 0.5rem;
			}

			h2 {
				font-size: 1.625rem;
			}
		}

		.image-container {
			width: 48%;
		}
	}
`;
export default StyledHomeSection;
