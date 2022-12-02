# Development: Anime Base

## Context & Background

Anime Base is a simple catalog application centered around anime serries. This project originally started as an intent to get my friends (who are always busy and have diverse anime taste) to watch some of my favorite anime serries. 

All anime data and information in this repository are inspired by and pulled from [MyAnimeList](https://myanimelist.net/) and [AniList](https://anilist.co/search/anime). 

The application is created using the React.js [React.js](https://reactjs.org/) framework. 

## Goal & Functionality 

The goal of this application is to help users select and keep track of what anime serries they want to watch by 
picking from a set of anime serries while also keeping track of the number of episdoes in total to watch. 

Users can view a list of 15 anime serries and choose which ones to add to their "to-watch" list. The list adds together the number of episodes of each anime serries and displays the total to the user.

Click [Here](https://teddybear333.github.io/Development/) to see the final deployed site. 

## Usability Principles 

Here are the usability principles I kept in mind to make the application intuitive and enjoyable to use:

Learnability
- Users can easily distingush the anime serries gallery (on the left side) and the to-watch list (on the right side). 
- All buttons are directly linked to specific actions that contain descriptie text (e.g. 'Add to LIst ♡') and no potentially confusing icons are used. 
- The interface layout is similar to that of a one-page shopping site so that users can transition from the anime serries gallery to the list views. 
- Users can easily filter, sort, add and remove anime serries from their list with a click of a button. 

Memorability
- Once an anime serries is added to the cart, the 'Add to LIst ♡' button is disabled and changed to display 'Added to List ♡', allowing users to easily remember and track which anime serries they have already added to their to-watch list. 

Efficiency
- Useful filter and sort options are at the top and above the anime serries gallery so that users can quily find and categorize their desired options. 

## Techncal Details 

Here is an outline of the architecture of the project. 

### Component Organization & Hierarchy

This code is straightfowared with a realtively flat structure and easy to understand. 

There are 3 main components:
- **App**: This is the root component of the app. It contains all logic involving user interaction (sorting, filtering, and adding/removing anime serries).
- **Gallery**: This is a component that displays a list of anime serries as a collection of cards. The component is used for both displaying all avaiable anime serries in the gallery and all anime serries in the user's to-watch list. 
- **ViewOptions**: This is a component that contains buttons that allow the user to filter and sort anime serries in the gallery (except in the to-watch list).

The hierarchy is as follows:
- `App`
  - left section div
    - `ViewOptions`
    - `Gallery` (anime serries)
  - right section div
    - `Gallery` (to-watch list)

### Flow of Data Between Components

`App` holds all of the state values and state-setting functions. The state values and setters are shown below:

```js
  const [seasonFilter, setSeasonFilter] = useState(SEASON.ALL);
  const [genreFilter, setGenreFilter] = useState(GENRE.ALL);
  const [episodeBy, setEpisodeBy] = useState(EPISODE.DEFAULT);
  
  const [animeGalleryItems, setAnimeGalleryItems] = useState(ANIME);
  const [listGalleryItems, setListGalleryItems] = useState([]);
```

`App` only passes the necessary values and functions to its child components:
- `Gallery` (anime serries selections) receives animeGalleryItems and a function for adding courses to the to-watch list as props from `App`
- `Gallery` (to-watch list selections) receives listGalleryItems and a function for removing courses from the shopping cart as props from `App`
- `ViewOptions` receives the values and setters for the filters and EpisodeBy as props from `App`

### Triggering Actions Through User Interactions

The interface changes are all triggered by the setter functions: setSeasonFilter, setGenreFilter, setEpisodeBy, setAnimeGalleryItems, and setListGalleryItems.

#### `ViewOptions`
Whenever the user clicks on a filter or sort method in `ViewOptions`, the corresponding setter function is called, triggering a `useEffect` hook in `App` to filter, sort, and update animeGalleryItems. This updated list of items is then passed into the `Gallery` (anime serries selections) component to update the displayed anime serries cards.

#### `Gallery` (anime serries selections)
When the user clicks on the add button for any anime serries card, it triggers a callback function that appends that course item to animeGalleryItems in `App`, which then is sent to `Gallery` (to-watch list selections) to update the items displayed on the list. 

#### `Gallery` (to-watch list selections)
When the user clicks on the remove button for any item on the list, it triggers a callback function that removes that course item from cartGalleryItems in `App`, which is sent back to `Gallery` (anime serries) to update the anime serries displayed on the list.

Click [Here](https://github.com/teddybear333/Development) to see the source code. 

## Afterthoughts 

This project was a concise and descriptive React.js development. While the scope of the applications current functionalities, design, and content are limited, the structure of this project could be expaned to more developed anime database in future iterations. 

