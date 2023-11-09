import { useState } from 'react';
import { MovieCardProps } from './movie_card';


// const movies = [
//   {
//     src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
//     name: 'Fantastic Beasts: The Crimes of Grindelwald'
//   },
//   {
//     src: 'img/bohemian-rhapsody.jpg',
//     name: 'Bohemian Rhapsody'
//   },
//   {
//     src: 'img/macbeth.jpg',
//     name: 'Macbeth'
//   },
//   {
//     src: 'img/aviator.jpg',
//     name: 'Aviator'
//   },
//   {
//     src: 'img/we-need-to-talk-about-kevin.jpg',
//     name: 'We need to talk about Kevin'
//   },
//   {
//     src: 'img/what-we-do-in-the-shadows.jpg',
//     name: 'What We Do in the Shadows'
//   },
//   {
//     src: 'img/revenant.jpg',
//     name: 'Revenant'
//   },
//   {
//     src: 'img/johnny-english.jpg',
//     name: 'Johnny English'
//   },
//   {
//     src: 'img/shutter-island.jpg',
//     name: 'Shutter Island'
//   },
//   {
//     src: 'img/pulp-fiction.jpg',
//     name: 'Pulp Fiction'
//   },
//   {
//     src: 'img/no-country-for-old-men.jpg',
//     name: 'No Country for Old Men'
//   },
//   {
//     src: 'img/snatch.jpg',
//     name: 'Snatch'
//   },
//   {
//     src: 'img/moonrise-kingdom.jpg',
//     name: 'Moonrise Kingdom'
//   },
//   {
//     src: 'img/seven-years-in-tibet.jpg',
//     name: 'Seven Years in Tibet'
//   },
//   {
//     src: 'img/midnight-special.jpg',
//     name: 'Midnight Special'
//   },
//   {
//     src: 'img/war-of-the-worlds.jpg',
//     name: 'War of the Worlds'
//   },
//   {
//     src: 'img/dardjeeling-limited.jpg',
//     name: 'Dardjeeling Limited'
//   },
//   {
//     src: 'img/orlando.jpg',
//     name: 'Orlando'
//   },
//   {
//     src: 'img/mindhunter.jpg',
//     name: 'Mindhunter'
//   },
//   {
//     src: 'img/midnight-special.jpg',
//     name: 'Midnight Special'
//   }
// ];

import MovieCard from './movie_card';

type MovieListProps = {
  films: MovieCardProps[];
}

function MoviesList({films}: MovieListProps) {
  const [, setActiveCard] = useState<string | null>(null);

  return (
    <div className='catalog__films-list'>
      {films.map((film: MovieCardProps) => (
        <MovieCard key={film.id} previewSrc={film.previewSrc} title={film.title} id={film.id} releaseDate={film.releaseDate} onMouseEnter={() => setActiveCard(film.id)} onMouseLeft={ () => setActiveCard(null)}/>
      ))}
    </div>
  );
}

export default MoviesList;
