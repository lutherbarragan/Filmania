import styled from 'styled-components';
import HomeSection from './HomeSection';

const StyledHomeSection = styled(HomeSection)`
	width: 100%;
	border-bottom: 1vh solid ${props => props.theme.darkGray};
	color: ${props => props.theme.white};
	padding: 70px 45px;

	h1 {
		font-size: 3.125rem;
		font-weight: 600;
		margin-bottom: 1.2rem;
	}

	.container,
	.flex-container {
		margin: 0 auto;
		max-width: 1100px;
	}

	.container .faq-container {
		width: 75%;
		margin: 2em auto;
	}

	.flex-container {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.text-container,
		.image-container {
			display: inline-block;
		}

		.text-container {
			width: 52%;

			h2 {
				font-size: 1.5rem;
			}

			:nth-child(1) {
				padding-right: 3rem;
			}

			:nth-child(2) {
				padding-left: 2rem;
			}
		}

		.image-container {
			width: 48%;
		}
	}
`;
export default StyledHomeSection;
