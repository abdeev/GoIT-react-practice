import StatCard from 'components/Statistics/StatitisticCards';
import css from '../../components/Statistics/StatisticsStyles.module.css';

export const FavorietsCards = ({
  cards,
  handelIncreaseCounter,
  handleDeleteCard,
  handleDecreaseCounter,
  handleResetCounter,
  handleAddFavourite,
}) => {
  return (
    <div className={css.statistics_cards_wrapper}>
      {cards.map(({ id, title, count }) => (
        <StatCard
          id={id}
          title={title}
          count={count}
          key={id}
          handlIncreaseClick={handelIncreaseCounter}
          handleDeleteCard={handleDeleteCard}
          handleDecreaseCounter={handleDecreaseCounter(id)}
          handleResetCounter={handleResetCounter(id)}
          handleAddFavourite={handleAddFavourite}
        />
      ))}
    </div>
  );
};
