import styled from 'styled-components';
import bg from '../../assets/background.jpg';

const Home = styled.div`
	font-family: 'Inter', sans-serif;
	background-color: ${props => props.theme.black};

	main {
		height: 100vh;
		padding-top: 15rem;
		background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%),
			radial-gradient(circle, rgba(0, 0, 0, 0.095) 0%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bg});
		background-size: cover;
		background-position: center;
		text-align: center;
		border-bottom: 1vh solid ${props => props.theme.darkGray};

		h1,
		h2,
		h3 {
			color: ${props => props.theme.white};
			font-family: inherit;
		}

		h1 {
			font-size: 64px;
			font-weight: 600;
		}

		h2 {
			font-size: 26px;
			font-weight: 400;
			margin: 1rem auto;
		}

		form {
			padding-top: 0.85rem;

			h3 {
				font-size: 18px;
				font-weight: 500;
				margin: 0.85rem 0;
			}
		}
	}
`;

export default Home;
