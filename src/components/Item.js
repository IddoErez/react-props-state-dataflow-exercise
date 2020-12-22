import React, { Component } from 'react';

class Item extends Component {
    render() {
          return <div>{this.props.item}: {this.props.shouldDiscount ? this.props.price * (1 - this.props.discount) : this.props.price}</div>
    }
    }

export default Item