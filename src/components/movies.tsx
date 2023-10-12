import React from 'react';
import MovieCardProps from './movie_card';

const movies = [
  {
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {
    src: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody'
  },
  {
    src: 'img/macbeth.jpg',
    name: 'Macbeth'
  },
  {
    src: 'img/aviator.jpg',
    name: 'Aviator'
  },
  {
    src: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin'
  },
  {
    src: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows'
  },
  {
    src: 'img/revenant.jpg',
    name: 'Revenant'
  },
  {
    src: 'img/johnny-english.jpg',
    name: 'Johnny English'
  },
  {
    src: 'img/shutter-island.jpg',
    name: 'Shutter Island'
  },
  {
    src: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction'
  },
  {
    src: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men'
  },
  {
    src: 'img/snatch.jpg',
    name: 'Snatch'
  },
  {
    src: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom'
  },
  {
    src: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet'
  },
  {
    src: 'img/midnight-special.jpg',
    name: 'Midnight Special'
  },
  {
    src: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds'
  },
  {
    src: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited'
  },
  {
    src: 'img/orlando.jpg',
    name: 'Orlando'
  },
  {
    src: 'img/mindhunter.jpg',
    name: 'Mindhunter'
  },
  {
    src: 'img/midnight-special.jpg',
    name: 'Midnight Special'
  }
];

function MoviesList() {
  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <MovieCardProps key={movie.name} src={movie.src} name={movie.name} />
      ))}
    </div>
  );
}

export default MoviesList;
