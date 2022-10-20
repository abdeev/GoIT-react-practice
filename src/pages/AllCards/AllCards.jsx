import StatCard from '../../components/Statistics/StatitisticCards';
import css from '../../components/Statistics/StatisticsStyles.module.css';

export const AllCards = ({
  items,
  handelIncreaseCounter,
  handleDeleteCard,
  handleDecreaseCounter,
  handleResetCounter,
  handleAddFavourite,
}) => {
  return (
    <div className={css.statistics_cards_wrapper}>
      {items.map(({ id, title, count, favorite }) => (
        <StatCard
          id={id}
          title={title}
          count={count}
          key={id}
          favorite={favorite}
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
