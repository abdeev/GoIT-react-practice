import React, { Component } from 'react';
import StatCard from './StatitisticCards';
import css from './StatisticsStyles.module.css';

class StatCompon extends Component {
  constructor() {
    super();
    this.state = {
      statsElements: [
        { id: 1, title: 'Likes', count: 1000 },
        { id: 2, title: 'Members', count: 1000 },
        { id: 3, title: 'Products', count: 1000 },
        { id: 4, title: 'Trees', count: 1000 },
      ],
    };
  }

  hendelIncreaseCounter = id => {
    const newElArr = this.state.statsElements.map(el => {
      if (el.id === id) {
        return { ...el, count: (el.count += 1) };
      }
      return el;
    });
    this.setState({ statsElements: newElArr });
  };

  handleDecreaseCounter = id => () => {
    const { statsElements } = this.state;

    const x = statsElements.find(el => el.id === id);

    if (!x.count) {
      return;
    }

    const newElArr = this.state.statsElements.map(el => {
      if (el.id === id) {
        return { ...el, count: (el.count -= 1) };
      }
      return el;
    });
    this.setState({ statsElements: newElArr });
  };

  handleResetCounter = id => {
    return () => {
      const newElArr = this.state.statsElements.map(el => {
        if (el.id === id) {
          return { ...el, count: 0 };
        }
        return el;
      });
      this.setState({ statsElements: newElArr });
    };
  };

  handleDeleteCard = id => {
    const filteredCards = this.state.statsElements.filter(el => {
      if (el.id === id) {
        return false;
      }
      return el;
    });
    this.setState({ statsElements: filteredCards });
  };

  render() {
    return (
      <div className={css.statistics_wrapper}>
        <h1 className={css.statistics_header}>Main statistics</h1>
        <div className={css.statistics_cards_wrapper}>
          {this.state.statsElements.map(({ id, title, count }) => (
            <StatCard
              id={id}
              title={title}
              count={count}
              key={id}
              hendlIncreaseClick={this.hendelIncreaseCounter}
              handleDeleteCard={this.handleDeleteCard}
              handleDecreaseCounter={this.handleDecreaseCounter(id)}
              handleResetCounter={this.handleResetCounter(id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StatCompon;
