import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: "#FFF", //starts of white  in the rectangel
    }
  }
  
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor, // this keeps track of the colore and changes the color of the  children to a random color
    });
  };
//now both parent and child colroe are getting changed 
  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
    
      </div>
    )
  }
}

export default Parent
