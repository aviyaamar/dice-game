import React from 'react';
import Button from './button/button';
import Player from './player/player'
import Dice from './diceGame/ImgDice'
import Winner from './winner/winner'

class Game extends React.Component {
    state = {
        scoreToWin: 100,
        current: 0,
        dice: [null, null],
        players: [
            {
                currentScore: 0,
                holdScore: 0,
                winner: 0
            },
            {
                currentScore: 0,
                holdScore: 0,
                winner: 0

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
     //   console.log(players)
        let currentPlayer = {...players[this.state.current]}
        console.log({currentPlayer})
      
        if(cube1 +  cube2 === 12){
            currentPlayer.currentScore = 0;
            players[this.state.current] = currentPlayer;
            this.setState({players})
            if(this.state.current === 0){
                this.state.current = 1
            } 
            else{
                this.state.current = 0
            }
        }
        else{
            currentPlayer.currentScore += cube1 + cube2;
            players[this.state.current] =currentPlayer
            this.setState({players})
        }

        this.setState({dice:[cube1, cube2]})
    }
    
    hold = () =>{
        let players = [...this.state.players];
        let currentPlayer = { ...players[this.state.current] };
        currentPlayer.holdScore += currentPlayer.currentScore;
        players[this.state.current] = currentPlayer;
        if (players[this.state.current].holdScore >= this.state.scoreToWin) {
            currentPlayer.winner += 1;
            players[0].holdScore = 0;
            players[1].holdScore = 0;
            players[this.state.current] = currentPlayer;
          
        }
        currentPlayer.currentScore = 0;
        this.setState({ players });
          if(this.state.current === 0 ){
            (this.state.current = 1)

        }
            else{
                (this.state.current = 0);
            } 
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
                            winner={this.state.players[0].holdScore >= this.state.scoreToWin}
                            name="PLAYER-1"
                            score={this.state.players[0].holdScore}
                            currentScore={this.state.players[0].currentScore}
                        />
                         <Winner winner={this.state.players[0].winner}/>
                    </div>
                    <div className='dice-container'>
                        <Dice score={this.state.dice[0]} />
                        <Dice score={this.state.dice[1]} />
                    </div>
                    <div className='palyer-2'>
                        <Player
                            winner={this.state.players[1].holdScore >= this.state.scoreToWin}
                            name="PLAYER-2" 
                            score={this.state.players[1].holdScore}
                            currentScore={this.state.players[1].currentScore}
                        />
                          <Winner winner={this.state.players[0].winner}/>
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