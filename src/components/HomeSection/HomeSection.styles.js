import styled from 'styled-components';

const StyledHomeSection = styled.section`
	width: 100%;
	height: 48vh;
	border-bottom: 1vh solid ${props => props.theme.darkGray};
	color: ${props => props.theme.white};

	div[type='flex-container'] {
		height: 100%;
		margin: 0 auto;
		max-width: 1100px;
		display: flex;
		align-items: center;
		border: 1px solid blue;
	}

	div[for='text'],
	div[for='image'] {
		display: inline-block;
		border: 1px solid red;
	}

	div[for='text'] {
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
	div[for='image'] {
		width: 48%;
	}
`;
export default StyledHomeSection;
