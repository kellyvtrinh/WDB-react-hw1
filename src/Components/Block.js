import React from 'react';

class Block extends React.Component {
   
    constructor(props) {
      super(props); 
    }
    
  render() {

  const mystyle = {
      display: 'flex'    };
    this.props.attribute

  return (
    <>
      <div class = "blockers" style={
        /*ADD CODE HERE */
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;