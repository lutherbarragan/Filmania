const FaqItem = ({ className, question, answers }) => (
	<div className={className}>
		<p className='question'>{question}</p>

		{answers.map((a, i) => (
			<div className='answers' key={`paragraph-${i}`}>
				<p>{a}</p>
			</div>
		))}
	</div>
);

export default FaqItem;
