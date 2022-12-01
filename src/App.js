import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';

import ANIME, { GENRE, SEASON, EPISODE } from './constants';
import Gallery from './Gallery';
import ViewOptions from './ViewOptions';

function App() {
  const [seasonFilter, setSeasonFilter] = useState(SEASON.ALL);
  const [genreFilter, setGenreFilter] = useState(GENRE.ALL);
  const [episodeBy, setEpisodeBy] = useState(EPISODE.DEFAULT);
  const [animeGalleryItems, setAnimeGalleryItems] = useState(ANIME);
  const [listGalleryItems, setListGalleryItems] = useState([]);

  // anime list gallery are updated according to filter or sort
  useEffect(() => {
    // all anime  are shown 
    let newAnimeGalleryItems = [...ANIME];

    // seasons and genre filters are applied 
    newAnimeGalleryItems = newAnimeGalleryItems
      .filter(x => seasonFilter === SEASON.ALL || x.season === seasonFilter)
      .filter(x => genreFilter === GENRE.ALL || x.genre === genreFilter);

    // episode are apprlied 
    if (episodeBy !== EPISODE.DEFAULT) {
      newAnimeGalleryItems = newAnimeGalleryItems
        .sort((a, b) => {
          return episodeBy === EPISODE.NUM_ASC
            ? a.episodeNum - b.episodeNum
            : b.episodeNum - a.episodeNum
        });
    }

    // new anime list is saved 
    setAnimeGalleryItems(newAnimeGalleryItems);
  }, [
    seasonFilter,
    genreFilter,
    episodeBy,
    setSeasonFilter,
    setGenreFilter,
    setEpisodeBy,
    setAnimeGalleryItems,
  ]);

  return (
    <div id="app">
      <header>
        <h2> ✿ Welcome to my Anime Database ✿ </h2>
      </header>
      <main>
        <div id="left-section">
          <ViewOptions
            seasonFilter={seasonFilter}
            genreFilter={genreFilter}
            episodeBy={episodeBy}
            setSeasonFilter={setSeasonFilter}
            setGenreFilter={setGenreFilter}
            setEpisodeBy={setEpisodeBy}
          />
          <Gallery
            animes={animeGalleryItems}
            disabledAnime={listGalleryItems}
            handleButtonClicked={id => {
              // id to cart
              const newItem = ANIME.find(x => x.id === id);
              setListGalleryItems([...listGalleryItems, newItem]);
            }}
          />
        </div>
        <div id="right-section">
          <Gallery
            animes={listGalleryItems}
            animeList={true}
            handleButtonClicked={id => {
              // remoe id from cart
              setListGalleryItems([...listGalleryItems].filter(x => x.id !== id));
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
