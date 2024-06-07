import Banner from '../../components/Banner';
import CardList from '../../components/CardList';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useFavoriteContext } from '../../contexts/favorites';
import styles from './Favorites.module.css';

function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Header />
      <Banner image="purpleForest.jpeg" />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus Favoritos</h2>
          {<CardList videos={favorite} emptyHeading="Sem Favoritos"/>}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
