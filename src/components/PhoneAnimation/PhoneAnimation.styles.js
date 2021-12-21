import styled from 'styled-components';
import PhoneAnimation from './PhoneAnimation';

const StyledPhoneAnimation = styled(PhoneAnimation)`
	position: relative;
	overflow: hidden;
	margin: -8% 0 -4% -15%;
	width: 100%;

	.download-container {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, -25%);
		width: 60%;
		background-color: ${props => props.theme.black};
		border: 2px solid ${props => props.theme.lightGray};
		border-radius: 0.75rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0.5rem 0;

		img {
			height: 5rem;
		}

		div {
			margin-right: 3rem;

			p {
				font-weight: 600;
			}

			span {
				font-size: 0.9em;
				color: ${props => props.theme.blue};
			}
		}

		.download-icon {
			width: 3em;
			height: auto;
		}
	}
`;

export default StyledPhoneAnimation;
