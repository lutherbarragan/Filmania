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
		/* border: 1px solid blue; */
	}

	div[type='text-container'],
	div[type='image-container'] {
		display: inline-block;
		/* border: 1px solid red; */
	}

	div[type='text-container'] {
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

	div[type='image-container'] {
		width: 48%;

		div[type='parent-animation-container'] {
			position: relative;
			overflow: hidden;

			img {
				position: relative;
				z-index: 2;
			}

			div[type='video-container'] {
				width: 100%;
				height: 100%;
				max-width: 73%;
				max-height: 54%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -54%);

				video {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
`;
export default StyledHomeSection;
