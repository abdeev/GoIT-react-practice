import React, { Component } from 'react';
import StatCard from './StatitisticCards';
import css from './StatisticsStyles.module.css';
// import AddCardForm from 'components/AddCardForm/AddCardForm';

import ButtonModal from 'components/ButtonModal/ButtonModal';
import Modal from 'components/Modal/Modal';

class StatCompon extends Component {
  constructor() {
    super();
    this.state = {
      statsElements: [],
      showModal: false,
    };
  }

  componentDidMount() {
    const LSData = JSON.parse(localStorage.getItem('statsElements'));

    if (!LSData) return;

    this.setState({ statsElements: LSData });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.statsElements !== this.state.statsElements) {
      const LSSetData = JSON.stringify(this.state.statsElements);

      localStorage.setItem('statsElements', LSSetData);
    }
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
    const filteredCards = this.state.statsElements.filter(el => el.id !== id);
    this.setState({ statsElements: filteredCards });
  };

  handleCreateCard = cardObj => {
    this.setState({
      statsElements: [cardObj, ...this.state.statsElements],
      showModal: false,
    });
  };

  handleOpenModal = event => {
    this.setState({ showModal: true });
  };

  handleCloseModal = event => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className={css.statistics_wrapper}>
        <h1 className={css.statistics_header}>Main statistics</h1>
        {/* <AddCardForm onCreateCard={this.handleCreateCard} /> */}

        <ButtonModal actionOpenModal={this.handleOpenModal} />

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

        {this.state.showModal && (
          <Modal
            onCreateCard={this.handleCreateCard}
            onCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default StatCompon;
