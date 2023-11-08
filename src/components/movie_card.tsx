import React from 'react';

type MovieCardProps = {
  src: string;
  name: string;
}


function MovieCard({ src, name }: MovieCardProps) {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={src} alt={name} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='film-page.html'>{name}</a>
      </h3>
    </article>
  );
}

export default MovieCard;