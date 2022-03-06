import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What’s the number one ranked solution for fighting climate change?',
			answerOptions: [
				{ answerText: 'Restore tropical forests', isCorrect: false },
				{ answerText: 'Waste less water', isCorrect: false },
				{ answerText: 'Manage Refrigerants', isCorrect: true },
				{ answerText: 'Turning Off Lights', isCorrect: false },
			],
		},
		{
			questionText: 'About how long does it take a Styrofoam cup to decompose?',
			answerOptions: [
				{ answerText: '2 months', isCorrect: false },
				{ answerText: '10 years', isCorrect: false },
				{ answerText: '150 years', isCorrect: false },
                { answerText: '400 years', isCorrect: true },
			],
		},
		{
			questionText: 'How many single-use plastic bottles are used in the UK every day?',
			answerOptions: [
				{ answerText: '15 million', isCorrect: false },
				{ answerText: '21 million', isCorrect: false },
				{ answerText: '38.5 million', isCorrect: true },
				{ answerText: '50 million', isCorrect: false },
			],
		},
		{
			questionText: 'How much water does it take, on average, to produce a pair of cotton jeans?',
			answerOptions: [
				{ answerText: '100 litres', isCorrect: false },
				{ answerText: '1000 litres', isCorrect: false },
				{ answerText: '5000 litres', isCorrect: false },
				{ answerText: '10,000 litres', isCorrect: true },
			]
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
