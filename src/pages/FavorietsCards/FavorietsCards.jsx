import StatCard from 'components/Statistics/StatitisticCards';
import { useSelector } from 'react-redux';

import css from '../../components/Statistics/StatisticsStyles.module.css';

export const FavorietsCards = (
  {
    // cards,
    // handelIncreaseCounter,
    // handleDeleteCard,
    // handleDecreaseCounter,
    // handleResetCounter,
    // handleAddFavourite,
  }
) => {
  const { cards } = useSelector(state => state.cards);
  return (
    <div className={css.statistics_cards_wrapper}>
      {cards
        .filter(card => card.favorite)
        .map(({ id, title, count, favorite }) => (
          <StatCard
            id={id}
            title={title}
            count={count}
            favorite={favorite}
            key={id}
            // handlIncreaseClick={handelIncreaseCounter}
            // handleDeleteCard={handleDeleteCard}
            // handleDecreaseCounter={handleDecreaseCounter(id)}
            // handleResetCounter={handleResetCounter(id)}
            // handleAddFavourite={handleAddFavourite}
          />
        ))}
    </div>
  );
};
