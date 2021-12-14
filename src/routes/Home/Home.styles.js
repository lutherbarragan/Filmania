import styled from 'styled-components';
import bg from '../../assets/background.jpg';

const Home = styled.div`
	font-family: 'Inter', sans-serif;
	background-color: ${props => props.theme.black};

	main {
		position: relative;
		height: 78vh;
		background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%),
			radial-gradient(circle, rgba(0, 0, 0, 0.095) 0%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bg});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		text-align: center;
		border-bottom: 1vh solid ${props => props.theme.darkGray};

		h1,
		h2,
		h3 {
			color: ${props => props.theme.white};
			font-family: inherit;
		}

		h1 {
			font-size: 62px;
			font-weight: 600;
		}

		h2 {
			font-size: 26px;
			font-weight: 400;
			margin: 1rem auto;
		}
	}
`;

export default Home;
