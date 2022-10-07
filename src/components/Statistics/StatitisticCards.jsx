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
  hendlClickPlus,
  hendlClickMinuse,
  hendelResetCounter,
  hendelDeleteCard,
}) => {
  const hendlUpClick = () => hendlClickPlus(id);
  const hendelDeleteClick = () => hendelDeleteCard(id);

  return (
    <div className={css.card_wrapper}>
      <div className={css.buttons}>
        <button
          className={css.increase_button}
          onClick={() => hendlUpClick(id)}
        >
          <UpIcon className={css.buttonIcon} />
        </button>
        <button className={css.clear_button}>
          <CrossIcon className={css.buttonIcon} onClick={hendelResetCounter} />
        </button>
        <button className={css.decrease_button}>
          <DownIcon className={css.buttonIcon} onClick={hendlClickMinuse} />
        </button>
      </div>
      <span className={css.count_value}> {count}</span>
      <span className={css.card_description}>{title}</span>
      <button className={css.delete_button} onClick={hendelDeleteClick}>
        Delete card
        <TrashIcon className={css.thrashIcon} />
      </button>
    </div>
  );
};

export default StatCard;
