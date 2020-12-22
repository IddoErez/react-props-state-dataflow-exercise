import Article from "./Article";
import React, { Component } from 'react';

class Wardrobe extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ]
    let mappedWardrobe = wardrobe.map (w=><Article color={w.color} type={w.type} key={w.color + w.type + w.size}/>)
    // return FunctionalComponent data={someData} />
    return mappedWardrobe

  }
}

export default Wardrobe