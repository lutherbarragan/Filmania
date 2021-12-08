import styled from 'styled-components';
import bg from '../../assets/background.jpg';

const StyledMain = styled.main`
	height: 99vh;
	background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%),
		radial-gradient(circle, rgba(0, 0, 0, 0.095) 0%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bg});
	background-size: cover;
	background-position: center;
`;

export default StyledMain;
