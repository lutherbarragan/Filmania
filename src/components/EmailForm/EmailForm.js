import StyledEmailForm from './EmailForm.styles.js';

const EmailForm = props => (
	<StyledEmailForm>
		<input {...props} />
		<button>Get Started ›</button>
	</StyledEmailForm>
);

export default EmailForm;
