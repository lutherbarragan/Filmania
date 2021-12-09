import StyledInput from './Input.styles.js';

const Input = props => (
	<StyledInput>
		<input {...props} />
		<button>Get Started ›</button>
	</StyledInput>
);

export default Input;
