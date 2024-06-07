import Card from '../Card';
import styles from './CardRoll.module.css';
import videos from '../../json/videos.json';
import Carousel from '../Carousel';

function CardRoll({ path }) {
  return (
    <div className={styles.cardroll}>
      <h2>{path}</h2>
      <section>
        <Carousel key={path}>
          {videos.map((video) => {
            if (video.band === path) {
              return <Card cardId={video.id} key={video.id} />;
            }
          })}
        </Carousel>
      </section>
    </div>
  );
}

export default CardRoll;
