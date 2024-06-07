import { useState } from 'react';
import CardList from '../CardList';
import styles from './SearchList.module.css';

function filterVideos(videos, searchText) {
  return videos.filter(
    (video) => video.band.includes(searchText) || video.title.includes(searchText),
  );
}

function SearchList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <CardList videos={foundVideos} emptyHeading={`Sem videos sobre ${searchText}`} />
    </section>
  );
}

export default SearchList;
