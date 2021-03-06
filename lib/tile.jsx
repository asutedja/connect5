import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tileColor = "tile";
    if (this.props.value === "X") {
      tileColor = "tile-red";
    } else if (this.props.value === "O") {
      tileColor = "tile-blue";
    }
    
    return(
      <div className={ tileColor } onClick={this.props.onClick}>
        { this.props.value }
      </div>
    );
  }
}

export default Tile;
