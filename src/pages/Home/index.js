import Banner from '../../components/Banner';
import CardRoll from '../../components/CardRoll';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import bands from '../../Constants/bands';

function Home() {
  return (
    <>
      <Header />
      <Banner image="purplePlains.jpeg" />
      <Container>
        {bands.map((value) => (
          <CardRoll path={value} />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
