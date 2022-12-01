import akame from './image/akame.jpg';
import assasination from './image/assasination.jpg';
import bloodc from './image/blood-c.jpg';
import cellsatwork from './image/cellsatwork.jpg';
import cyberpunk from './image/cyberpunk.jpg';
import deathnote from './image/deathnote.jpg';
import devilman from './image/devilman.jpg';
import fullmetal from './image/fullmetal.jpg';
import hunterxhunter from './image/hunterxhunter.png';
import jjk from './image/jjk.jpg';
import kisshimnotme from './image/kisshimnotme.jpg';
import kotaro from './image/kotaro.jpg';
import myhero from './image/myhero.jpg';
import tokyoghoul from './image/tokyoghoul.jpg';
import tokyorevengers from './image/tokyorevengers.jpg';

export const GENRE = Object.freeze({
  ALL: 'All',
  ACTION: 'Action',
  COMMEDY: 'Comedy',
  SUPERNATURAL: 'Supernatural',
});

export const SEASON = Object.freeze({
  ALL: 'All',
  FALL: 'Fall',
  WINTER: 'Winter',
  SPRING: 'Spring',
  SUMMER: 'Summer'
});

export const EPISODE = Object.freeze({
  DEFAULT: 'Default',
  NUM_ASC: 'Least to Most',
  HOURS_DESC: 'Most to Least',
});

const ANIME = [
  {
    id: 'anime1',
    image: akame,
    name: 'Akame ga Kill!',
    season: SEASON.SUMMER,
    genre: GENRE.ACTION,
    episodeNum: 24
  },
  {
    id: 'anime2',
    image: assasination,
    name: 'Assassination Classroom',
    season: SEASON.WINTER,
    genre: GENRE.COMMEDY,
    episodeNum: 22
  },
  {
    id: 'anime3',
    image: bloodc,
    name: 'Blood-C',
    season: SEASON.SUMMER,
    genre: GENRE.SUPERNATURAL,
    episodeNum: 12,
  },
  {
    id: 'anime4',
    image: cellsatwork,
    name: 'Cells at Work!',
    season: SEASON.SUMMER,
    genre: GENRE.COMEDY,
    episodeNum: 13
  },
  {
    id: 'anime5',
    image: cyberpunk,
    name: 'Cyberpunk: Edgerunners',
    season: SEASON.SUMMER,
    genre: GENRE.ACTION,
    episodeNum: 10
  },
  {
    id: 'anime6',
    image: deathnote,
    name: 'Death Note',
    season: SEASON.FALL,
    genre: GENRE.SUPERNATURAL,
    episodeNum: 37
  },
  {
    id: 'anime7',
    image: devilman,
    name: 'Devilman Crybaby',
    season: SEASON.WINTER,
    genre: GENRE.SUPERNATURAL,
    episodeNum: 10
  },
  {
    id: 'anime8',
    image: fullmetal,
    name: 'Fullmetal Alchemist: Brotherhood',
    season: SEASON.SPRING,
    genre: GENRE.ACTION,
    episodeNum: 64
  },
  {
    id: 'anime9',
    image: hunterxhunter,
    name: 'Hunter X Hunter',
    season: SEASON.FALL,
    genre: GENRE.ACTION,
    episodeNum: 148
  },
  {
    id: 'anime10',
    image: jjk,
    name: 'Jujutsu Kaisen',
    season: SEASON.FALL,
    genre: GENRE.SUPERNATURAL,
    episodeNum: 24
  },
  {
    id: 'anime11',
    image: kisshimnotme,
    name: 'Kiss Him, Not Me',
    season: SEASON.FALL,
    genre: GENRE.COMMEDY,
    episodeNum: 12
  },
  {
    id: 'anime12',
    image: kotaro,
    name: 'Kotaro Lives Alone',
    season: SEASON.WINTER,
    genre: GENRE.COMMEDY,
    episodeNum: 10
  },
  {
    id: 'anime13',
    image: myhero,
    name: 'My Hero Academia',
    season: SEASON.SPRING,
    genre: GENRE.ACTION,
    episodeNum: 13
  },
  {
    id: 'anime14',
    image: tokyoghoul,
    name: 'Tokyo Ghoul',
    season: SEASON.SUMMER,
    genre: GENRE.SUPERNATURAL,
    episodeNum: 12
  },
  {
    id: 'anime15',
    image: tokyorevengers,
    name: 'Tokyo Reengers',
    season: SEASON.SPRING,
    genre: GENRE.ACTION,
    episodeNum: 24
  },
];

export default ANIME;
