/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilmDispatch } from '../../store';
import { fetchFilmReviews } from '../../store/api-action';
import { FilmReview } from '../../types/films';

function formatDate(date: string) {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const day = dateObj.toLocaleString('en-US', { day: 'numeric' });
  const year = dateObj.toLocaleString('en-US', { year: 'numeric' });
  return `${month} ${day}, ${year}`;
}

function ReviewsTab({ filmId }: { filmId: string }) {
  const [reviews, setReviews] = useState<FilmReview[]>([]);
  const midpoint = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, midpoint);
  const secondColReviews = reviews.slice(midpoint);
  const dispatch = useDispatch<FilmDispatch>();

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilmReviews(filmId))
        .unwrap()
        .then((data) => {
          setReviews(data);
        })
        .catch((err) => localStorage.setItem('error', err));
    }
  }, [dispatch, filmId]);

  const renderColumn = (colReviews: FilmReview[]) => (
    <div className='film-card__reviews-col'>
      {colReviews.map((review) => (
        <div key={filmId} className='review'>
          <blockquote className='review__quote'>
            <p className='review__text'>{review.comment}</p>
            <footer className='review__details'>
              <cite className='review__author'>{review.user}</cite>
              <time className='review__date' dateTime={review.date}>
                {formatDate(review.date)}
              </time>
            </footer>
          </blockquote>
          <div className='review__rating'>{review.rating}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className='film-card__reviews film-card__row'>
      {renderColumn(firstColReviews)}
      {renderColumn(secondColReviews)}
    </div>
  );
}

export default ReviewsTab;
