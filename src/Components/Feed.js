import React from 'react';
import Block from '../Components/Block';

class Feed extends React.Component {

    state = {
      blocks: Array(0), // ADD CODE HERE
      showopt: false
    }

    addBlock = (color) => {
        const blocks_copy = this.state.blocks.slice();
        blocks_copy.unshift(<Block key={blocks_copy.length + 1} attribute={color}></Block>);
        this.setState({
        blocks: blocks_copy// ADD CODE HERE
      })  
    } 

    pickColorlayout = () => {
      if (this.state.showopt == false) {
        this.setState({
          showopt: true
        })
      }
      else{
        this.setState({
            showopt: false
        })
      }
    }
    
    render() {

      return (
        <div className = 'mainfeed'>
        <div className="input">
        {
        this.state.blocks.map((block) => block)
        } 
        </div>
        <div>
          <button className="button" onClick={this.pickColorlayout}>+ Post Block</button>
        </div>
        { this.state.showopt ?         <div className="pickblock">
        <div>
            <button className="red"  onClick={() => this.addBlock("rgb(134, 5, 5)")}></button>
            <button className="blue" onClick={() => this.addBlock("rgb(21, 0, 141)")}></button>
        </div>
        <div>
            <button className="green"  onClick={() => this.addBlock("rgb(59, 110, 0)")}></button>
            <button className="purple"  onClick={() => this.addBlock("rgb(58, 0, 97)")}></button>
        </div>
     </div>: null }   
      </div>
    
      );
    }
  }


  export default Feed;