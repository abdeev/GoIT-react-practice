import React from 'react';
import css from './StatisticsStyles.module.css';
import { ReactComponent as UpIcon } from 'static/img/up.svg';
import { ReactComponent as CrossIcon } from 'static/img/cross.svg';
import { ReactComponent as DownIcon } from 'static/img/down.svg';
import { ReactComponent as TrashIcon } from 'static/img/thrash.svg';

const StatCard = ({
  id,
  title,
  count,
  hendlIncreaseClick,
  handleDecreaseCounter,
  handleResetCounter,
  handleDeleteCard,
}) => {
  const hendleUpClick = () => hendlIncreaseClick(id);
  const handleDeleteClick = () => handleDeleteCard(id);

  return (
    <div className={css.card_wrapper}>
      <div className={css.buttons}>
        <button className={css.increase_button} onClick={hendleUpClick}>
          <UpIcon className={css.buttonIcon} />
        </button>
        <button className={css.clear_button} onClick={handleResetCounter}>
          <CrossIcon className={css.buttonIcon} />
        </button>
        <button className={css.decrease_button}>
          <DownIcon
            className={css.buttonIcon}
            onClick={handleDecreaseCounter}
          />
        </button>
      </div>
      <span className={css.count_value}> {count}</span>
      <span className={css.card_description}>{title}</span>
      <button className={css.delete_button} onClick={handleDeleteClick}>
        Delete card
        <TrashIcon className={css.thrashIcon} />
      </button>
    </div>
  );
};

export default StatCard;
