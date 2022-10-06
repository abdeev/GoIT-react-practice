import css from './BoardCard.module.css';

const BoardCard = ({ imgURL, label, title, text, user }) => {
  const { avatar, name, time } = user;
  const labels = ['food', 'food', 'food'];
  return (
    <div className={css.border}>
      <img className={css.borderImage} src={imgURL} alt="food" />
      <div className={css.labelContainer}>
        {labels.map(label => (
          <span className={css.label}>{label}</span>
        ))}
      </div>

      <div className={css.cardInfo}>
        <h2 className={css.boarderTitle}>{title}</h2>

        <p className={css.boarderText}>{text}</p>

        <div className={css.boarderProfile}>
          <img className={css.boarderAvatar} src={avatar} alt={`${name} avatar`} />
          <div className={css.dataWrapper}>
          <h3 className={css.boarderName}>{name}</h3>
          <span className={css.boarderTime}>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
