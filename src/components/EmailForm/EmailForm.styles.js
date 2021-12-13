import styled from 'styled-components';

const StyledEmailForm = styled.form`	
	div {
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		width: 40vw;
		height: 70px;
		margin: 0 auto;
		
		input {
			padding: 0 10px;
			height: 100%;
			width: 65%;
		}
		button {
			width: 35%;
			font-size: 30px;
			background-color: ${props => props.theme.mainRed};
			color: ${props => props.theme.white};
			
			&:hover {
				background-color: ${props => props.theme.secondaryRed};
				cursor: pointer;
			}
		}
	}
`;

export default StyledEmailForm;
