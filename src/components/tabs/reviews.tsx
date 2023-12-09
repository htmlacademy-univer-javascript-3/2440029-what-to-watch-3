// import { MovieCardProps } from '../movie-card';

// function ReviewsTab({ film }: { film: MovieCardProps }) {
//   const reviews = film.reviews;
//   const midpoint = Math.ceil(reviews.length / 2);
//   const firstColReviews = reviews.slice(0, midpoint);
//   const secondColReviews = reviews.slice(midpoint);

//   const renderColumn = (colReviews: Review[]) => (
//     <div className='film-card__reviews-col'>
//       {colReviews.map((review, index) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <div key={index} className='review'>
//           <blockquote className='review__quote'>
//             <p className='review__text'>{review.reviewText}</p>
//             <footer className='review__details'>
//               <cite className='review__author'>{review.reviewAuthor}</cite>
//               <time className='review__date' dateTime={review.reviewDate}>
//                 {review.reviewFormattedDate}
//               </time>
//             </footer>
//           </blockquote>
//           <div className='review__rating'>{review.reviewRating}</div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className='film-card__reviews film-card__row'>
//       {renderColumn(firstColReviews)}
//       {renderColumn(secondColReviews)}
//     </div>
//   );
// }

// export default ReviewsTab;
