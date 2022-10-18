import StatCard from '../../components/Statistics/StatitisticCards';
import css from '../../components/Statistics/StatisticsStyles.module.css';

export const AllCards = ({
  items,
  hendelIncreaseCounter,
  handleDeleteCard,
  handleDecreaseCounter,
  handleResetCounter,
}) => {
  return (
    <div className={css.statistics_cards_wrapper}>
      {items.map(({ id, title, count }) => (
        <StatCard
          id={id}
          title={title}
          count={count}
          key={id}
          hendlIncreaseClick={hendelIncreaseCounter}
          handleDeleteCard={handleDeleteCard}
          handleDecreaseCounter={handleDecreaseCounter(id)}
          handleResetCounter={handleResetCounter(id)}
        />
      ))}
    </div>
  );
};
