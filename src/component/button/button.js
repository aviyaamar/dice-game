import React from "react";
import './button.css'

class Button extends React.Component{
    render(){
        return(<button className="btn" onClick={this.props.onClick}>{this.props.name} </button>)
    }
}
export default Button
