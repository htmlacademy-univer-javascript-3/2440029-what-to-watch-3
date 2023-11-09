import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const RatingStars = ({ rating, setRating }: { rating: number, setRating: (rating: number) => void }) => {
  return (
    <div className="rating__stars">
      {Array.from({ length: 10 }, (_, index) => 10 - index).map(ratingValue => (
        <React.Fragment key={ratingValue}>
          <input
            className="rating__input"
            id={`star-${ratingValue}`}
            type="radio"
            name="rating"
            value={ratingValue}
            checked={rating === ratingValue}
            onChange={() => setRating(ratingValue)}
          />
          <label className="rating__label" htmlFor={`star-${ratingValue}`}>
            Rating {ratingValue}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

const ReviewTextarea = ({ reviewText, setReviewText }: { reviewText: string, setReviewText: (text: string) => void }) => {
    return (
        <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
        />
    );
};

const ReviewForm = () => {
  const [rating, setRating] = useState(8);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <RatingStars rating={rating} setRating={setRating} />
      </div>
      <div className="add-review__text">
        <ReviewTextarea reviewText={reviewText} setReviewText={setReviewText} />
        <div className="add-review__submit">
            <Link to={`/`} className="btn film-card__button">
                Post
            </Link>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
