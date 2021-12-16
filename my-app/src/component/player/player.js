import React from "react";
import CurrentScore from '../currentScore/CurrentScore'
import PlayerScore from '../PlayerScore'
import './player.css';


class Player extends React.Component{
    render(){
        return(
            <div className="players">
                <div className="score">
                    <PlayerScore name={this.props.name} 
                    score={this.props.score}/>
                </div>
                <CurrentScore currentScore={this.props.currentScore}/>
            </div>
        )
    }
}
export default Player