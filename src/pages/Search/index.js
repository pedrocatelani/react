import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchList from '../../components/SearchList';
import styles from './Search.module.css';
import videos from '../../json/videos.json';

function Search() {
  return (
    <>
      <Header />
      <Banner image="mountains.jpeg" />
      <Container>
        <section className={styles.search}>
          <SearchList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
