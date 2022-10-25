import StatCard from '../../components/Statistics/StatitisticCards';
import css from '../../components/Statistics/StatisticsStyles.module.css';

import { useSelector } from 'react-redux';

export const AllCards = () => {
  const { cards } = useSelector(state => state.cards);

  return (
    <div className={css.statistics_cards_wrapper}>
      {cards.map(({ id, title, count, favorite }) => (
        <StatCard
          id={id}
          title={title}
          count={count}
          key={id}
          favorite={favorite}
        />
      ))}
    </div>
  );
};
