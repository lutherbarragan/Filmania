import StyledEmailForm from './EmailForm.styles.js';

const EmailForm = () => (
	<StyledEmailForm>
		<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

		<div>
			<input type='text' placeholder='Email address' />
			<button>Get Started ›</button>
		</div>
	</StyledEmailForm>
);

export default EmailForm;
