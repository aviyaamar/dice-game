import React from 'react';
import Button from './button/button';
import Player from './player/player'
import Dice from './diceGame/ImgDice'


class Game extends React.Component {
    state = {
        scoreToWin: 100,
        turn: 0,
        dice: [null, null],
        players: [
            {
                currentScore: 0,
                holdScore: 0,
                wins: 0
            },
            {
                currentScore: 0,
                holdScore: 0,
                wins: 0

            }
        ]
    }
    initializeState = { ...this.state }
    newGame = (e) => {
        this.setState(this.initializeState)

    }

    rollDice = ()=>{
        let cube1 =  Math.floor(Math.random() * 6) + 1;
        let cube2 = Math.floor(Math.random() * 6) + 1;
        let players = [...this.state.players]
        console.log(players)
        let turnOfPlayer = {...players[this.state.turn]}
        console.log(turnOfPlayer)

        if(cube1 +  cube2 === 12){
            turnOfPlayer.currentScore = 0;
            players[this.state.turn] = turnOfPlayer;
            this.setState({players})
            if(this.state.turn === 0){
                this.state.turn = 1
            } else{
                this.state.turn = 0
            }
        }
        else{
            turnOfPlayer.currentScore += cube1 + cube2;
            players[this.state.turn] =turnOfPlayer
            this.setState({players})
        }

        this.setState({dice:[cube1, cube2]})
    }
    
    hold = () =>{
        let players = [...this.state.players];
        let playerRound = { ...players[this.state.turn] };
        playerRound.holdScore += playerRound.currentScore;
        players[this.state.turn] = playerRound;
        if (players[this.state.turn].holdScore >= this.state.scoreToWin) {
            playerRound.wins += 1;
            players[0].holdScore = 0;
            players[1].holdScore = 0;
            players[this.state.turn] = playerRound;
          
        }
        playerRound.currentScore = 0;
        this.setState({ players });
        this.state.playerTurn === 0
            ? (this.state.turn = 1)
            : (this.state.turn = 0);
    }
        
    

    render() {
        return (
            <div className="gameContainer">
                <h1 className='title'>DICE GAME</h1>
                <div className='sectionButton'>
                    <Button name='New Game' onClick={(e) => this.newGame(e)} />
                </div>

                <div className='playerContainer'>
                    <div className='palyer-1'>
                        <Player
                            wins={this.state.players[0].holdScore >= this.state.scoreToWin}
                            name="PLAYER-1"
                            score={this.state.players[0].holdScore}
                            currentScore={this.state.players[0].currentScore}
                        />
                    </div>
                    <div className='dice-container'>
                        <Dice score={this.state.dice[0]} />
                        <Dice score={this.state.dice[1]} />
                    </div>
                    <div className='palyer-2'>
                        <Player
                            wins={this.state.players[1].holdScore >= this.state.scoreToWin}
                            name="PLAYER-2" 
                            score={this.state.players[1].holdScore}
                            currentScore={this.state.players[1].currentScore}
                        />
                    </div>
                </div>

                <div className='sectionButton'>
                    <Button name='Roll Dice' onClick={(e) => this.rollDice(e)} />
                    <Button name='Hold' onClick={(e) => this.hold(e)} />
                </div>
            </div>


        )
    }
}

export default Game;