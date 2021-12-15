import styled from 'styled-components';

const Nav = styled.nav`
	position: absolute;
	width: 100%;
	height: 5rem;
	padding: 25px 3.5rem 0 3.5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	z-index: 100;

	img {
		display: inline-block;
		height: 100%;

		&:hover {
			cursor: pointer;
		}
	}
`;

export default Nav;
