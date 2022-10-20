import React from 'react';
import css from './StatisticsStyles.module.css';
import { ReactComponent as UpIcon } from 'static/img/up.svg';
import { ReactComponent as ResetIcon } from 'static/img/reset.svg';
import { ReactComponent as DownIcon } from 'static/img/down.svg';
import { ReactComponent as TrashIcon } from 'static/img/thrash.svg';
import { ReactComponent as FavouritesIcon } from 'static/img/heart.svg';

const StatCard = ({
  id,
  title,
  count,
  favorite,
  handlIncreaseClick,
  handleDecreaseCounter,
  handleResetCounter,
  handleDeleteCard,
  handleAddFavourite,
}) => {
  const handleUpClick = () => handlIncreaseClick(id);
  const handleDeleteClick = () => handleDeleteCard(id);
  const handleFavouriteClick = () => handleAddFavourite(id);

  return (
    <div className={css.card_wrapper}>
      <div className={css.buttons}>
        <button className={css.increase_button} onClick={handleUpClick}>
          <UpIcon className={css.buttonIcon} />
        </button>
        <button className={css.clear_button} onClick={handleResetCounter}>
          <ResetIcon className={css.buttonResetIcon} />
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
      <div className={css.buttonContainer}>
        <button className={css.favouriteBtn}>
          <FavouritesIcon
            className={favorite ? css.favouriteActiveIcon : css.favouriteIcon}
            onClick={handleFavouriteClick}
          />
        </button>
        <button className={css.delete_button} onClick={handleDeleteClick}>
          Delete card
          <TrashIcon className={css.thrashIcon} />
        </button>
      </div>
    </div>
  );
};

export default StatCard;
