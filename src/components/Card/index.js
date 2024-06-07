import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import iconFavorite from './favorite.png';
import iconUnFavorite from './unfavorite.png';
import { useFavoriteContext } from '../../contexts/favorites';

function Card({ cardId }) {
  const { favorite, addFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id === cardId);

  const iconImage = isFavorite ? iconUnFavorite : iconFavorite;

  return (
    <section className={styles.card}>
      <Link to={`/watch/${cardId}`}>
        <img
          src={`https://img.youtube.com/vi/${cardId}/mqdefault.jpg`}
          alt="Capa"
          className={styles.cover}
        />
      </Link>
      <figure className={styles.icon}>
        <img src={iconImage} alt="favoritar" onClick={() => addFavorite({ id:cardId })} />
      </figure>
    </section>
  );
}

export default Card;
