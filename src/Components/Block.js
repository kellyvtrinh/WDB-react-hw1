import React from 'react';

class Block extends React.Component {
   
    constructor(props) {
      super(props); 
    }
    
  render() {

  const mystyle = {
      display: 'flex'    };
    // this.props.attribute

  return (
    <>
      <div className = "blockers" style={
        {backgroundColor: this.props.attribute} 
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