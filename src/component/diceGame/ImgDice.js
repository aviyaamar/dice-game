import React from 'react';
import './imgDice.css'


class Dice extends React.Component {
	render() {
		const diceNums = [1, 2, 3, 4, 5, 6];
		return (
			<div>
				{diceNums.map((score, index) => {
					if (score === this.props.score) {
						return (
							<img style={{padding: '10px '}}
								key={index}
								className="dice-image"
                                src={`/dice-${score}.png`}
								alt={`dice-${score}`}
							/>
						);
					}
					return null
				})}
			</div>
		);
	}
}
export default Dice;