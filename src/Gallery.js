import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Gallery({
  animes=[],
  animeList=false,
  disabledAnime=[],
  handleButtonClicked=()=>{},
}) {
  // each anime is created a card 
  const itemCards = animes.map(anime => {
    const {id, name, image, episodeNum, season, genre } = anime;
    const className = animeList ? 'cart-anime-card' : 'anime-card';
    const disabled = disabledAnime.some(x => x.id === id);
    return (
      <Card key={id} className={className}>
        {animeList ? null : <Card.Img variant="top" src={image} />}
        <Card.Body>
         <Card.Title> <h8>{`${name}`}</h8></Card.Title>
          <Card.Text><h8>{`Broadcasting Season: ${season}`}</h8></Card.Text>
          <Card.Text><h8>{`Genre: ${genre}`}</h8></Card.Text>
          <Card.Text><h8>{`Number of Episodes: ${episodeNum}`}</h8></Card.Text>
          {animeList ? (
            <Button variant="warning" onClick={() => handleButtonClicked(id)}>
              Remove from List
            </Button>
          ) : (
            <Button
              variant="primary"
              disabled={disabled}
              onClick={() => handleButtonClicked(id)}
            >
              {disabled ? 'Added to List ♡ ' : 'Add to List ♡ '}
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  });

  if (animeList) {
    // on list, then total episode numbers calculated
    const episodeNum = animes.map(x => x.episodeNum);
    const totalWeeklyHours = episodeNum.reduce((a, b) => a + b, 0);
    const formatted = `${totalWeeklyHours}`.length > 5
      ? `${totalWeeklyHours}`.substring(0, 5)
      : `${totalWeeklyHours}`;
    return (
      <Card id="list-gallery">
        <h6>
         Anime List ({animes.length})
        </h6>
        <div className="gallery">
          {animes ? itemCards : null}
        </div>
        <h8>Total Number of Episodes to Watch: {formatted}</h8>
      </Card>
    );
  }
  return (
    <Card id="anime-gallery">
      <div className="gallery">
        {animes ? itemCards : null}
      </div>
    </Card>
  );
}
