import Card from '../Card';
import styles from './Cardlist.module.css';

function CardList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'vídeos' : 'vídeo';
    const noun2 = count > 1 ? 'encontrados' : 'encontrado';
    heading = `${count} ${noun} ${noun2}`;
  }

  return (
    <div className={styles.cardlist}>
      <h2>{heading}</h2>
      <section>
        {videos.map((video) => {
          return <Card cardId={video.id} key={video.id} />;
        })}
      </section>
    </div>
  );
}

export default CardList;
