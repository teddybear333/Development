import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { GENRE, SEASON, EPISODE } from './constants';

export default function ViewOptions({
  seasonFilter,
  genreFilter,
  episodeBy,
  setSeasonFilter,
  setGenreFilter,
  setEpisodeBy,
}) {
  const generateButtons = (mapping, selected, setSelected) => {
    return Object.keys(mapping).map(key => {
      const value = mapping[key];
      return (
        <Button
          key={key}
          variant="secondary"
          disabled={selected === value}
          onClick={() => setSelected(value)}
        >
          {value}
        </Button>
      );
    });
  };

  return (
    <Card id="view-options">
      <div className="option-group">
        <span className="option-label">Broadcasting Season</span>
        <ButtonGroup>
          {generateButtons(SEASON, seasonFilter, setSeasonFilter)}
        </ButtonGroup>
      </div>
      <div className="option-group">
        <span className="option-label">Genre</span>
        <ButtonGroup>
          {generateButtons(GENRE, genreFilter, setGenreFilter)}
        </ButtonGroup>
      </div>
      <div className="option-group">
        <span className="option-label">Number of Episodes</span>
        <ButtonGroup>
          {generateButtons(EPISODE, episodeBy, setEpisodeBy)}
        </ButtonGroup>
      </div>
    </Card>
  );
}
