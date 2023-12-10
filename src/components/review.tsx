/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FilmDispatch } from '../store';
import { postReview } from '../store/api-action';
import { useNavigate } from 'react-router-dom';

const RatingStars = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (rating: number) => void;
}) => (
  <div className='rating__stars'>
    {Array.from({ length: 10 }, (_, index) => 10 - index).map((ratingValue) => (
      <React.Fragment key={ratingValue}>
        <input
          className='rating__input'
          id={`star-${ratingValue}`}
          type='radio'
          name='rating'
          value={ratingValue}
          checked={rating === ratingValue}
          onChange={() => setRating(ratingValue)}
        />
        <label className='rating__label' htmlFor={`star-${ratingValue}`}>
          Rating {ratingValue}
        </label>
      </React.Fragment>
    ))}
  </div>
);

const ReviewTextarea = ({
  reviewText,
  setReviewText,
}: {
  reviewText: string;
  setReviewText: (text: string) => void;
}) => (
  <textarea
    className='add-review__textarea'
    name='review-text'
    id='review-text'
    placeholder='Review text'
    value={reviewText}
    onChange={(e) => setReviewText(e.target.value)}
  />
);

const ReviewForm = () => {
  const [rating, setRating] = useState(8);
  const {id} = useParams<{id: string}>();
  const [comment, setComment] = useState('');
  const dispatch = useDispatch<FilmDispatch>();
  const navigate = useNavigate();
  const isCommentValid = comment.length > 50 && comment.length < 400;

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!id || !isCommentValid) {
      return;
    }

    dispatch(postReview({id, rating, comment}))
      .unwrap()
      .then(() => {
        navigate(`/films/${id}`);
      })
      .catch((err) => localStorage.setItem('error', err));
  };

  return (
    <form action='#' className='add-review__form' onSubmit={handleSubmit}>
      <div className='rating'>
        <RatingStars rating={rating} setRating={setRating} />
      </div>
      <div className='add-review__text'>
        <ReviewTextarea reviewText={comment} setReviewText={setComment} />
        <div className='add-review__submit'>
          <button className="add-review__btn" type="submit" disabled={!isCommentValid}>Post</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
