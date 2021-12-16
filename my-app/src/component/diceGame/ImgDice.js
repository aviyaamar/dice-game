import React from 'react';
import './imgDice.css'

class Dice extends React.Component {
	render() {
		const diceNums = [1, 2, 3, 4, 5, 6];
		return (
			<div>
				{diceNums.map((score) => {
					if (score === this.props.score) {
						return (
							<img
								key={score}
								className="dice-image"
                                src={`/dice-${score}.png`}
								alt={`dice-${score}`}
							/>
						);
					}
				})}
			</div>
		);
	}
}
export default Dice;