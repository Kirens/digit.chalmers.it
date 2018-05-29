import React from "react"
import ReactDOM from "react-dom"


class FancyImage extends React.Component {

  render() {
    return (
      <img className="fancyImage" src={this.props.image} width={this.props.width} height={this.props.height} />
    );
  }

}

FancyImage.defaultProps = {
  width: 700,
  height: 700
}

export default FancyImage;
