const FaqItem = ({ className, question, answers }) => {
	const openAnswer = e => {
		const elem = e.target.nextSibling.style;
		elem.display = elem.display === 'block' ? 'none' : 'block';
	};

	return (
		<div className={className}>
			<p className='question' onClick={openAnswer}>
				{question}
			</p>

			<div className={`answers`}>
				{answers.map((a, i) => (
					<p key={`paragraph-${i}`}>{a}</p>
				))}
			</div>
		</div>
	);
};

export default FaqItem;
