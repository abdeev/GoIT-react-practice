import React, { Component } from "react";
import StatCard from "./StatitisticCards";

class StatCompon extends Component {

  constructor() {
    super();
    this.state = {
      statsElements : [
      { id:1,
        title: "Likes",
        count: 1000,
      },
      { id:2,
        title: "Members",
        count: 1000,
      },
      { id:3,
        title: "Products",
        count: 1000,
      },
      { id:4,
        title: "Trees",
        count: 1000,
      },
      ]
    }
  }

  hendelCounter = (id) => {
    
    const newElArr = this.state.statsElements.map(el => {
      if (el.id === id) {
          return { ...el, count:el.count += 1 }
      } 
      return el
    })
    console.log(newElArr)
    this.setState({ statsElements :newElArr})
  }

  render() {
  
    return (
      <div>
        <h1>Main stats</h1>
        <div>
          {this.state.statsElements.map(({id,title,count}) => (
            <StatCard
              id={id}
              title={title}
              count={count}
              key={id}
              hendlClick = {this.hendelCounter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StatCompon;
