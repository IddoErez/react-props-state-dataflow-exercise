import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return (
            <div>
                <h4>Store</h4>
                {this.props.store.map(i => { return <Item key={Math.random()} item={i.item} price={i.price} discount={i.discount} shouldDiscount={this.props.shouldDiscount}/> })}
            </div>
        )
    }
}

export default Home