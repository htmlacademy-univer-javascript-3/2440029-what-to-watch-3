import { MovieCardProps, Review } from '../components/movie-card';

const reviews: Review[] = [
  {
    reviewText:
      'Have a lot of appreciation for Queen. Not a favourite band of mine by all means, but it is difficult to not understand their importance and appeal. They had some iconic songs (namely Bohemian Rhapsody, We Will Rock You, We Are the Champions and Don\'t Stop Me Now) and Freddie Mercury s immediately recognisable vocals and Brian May\'s virtuosic guitar playing were always out of this world.',
    reviewAuthor: 'Gimly',
    reviewDate: '2019-03-08T14:13:56.569Z',
    reviewFormattedDate: 'March 8, 2019',
    reviewRating: 8.0,
  },
  {
    reviewText:
      'A wonderful cast and a story that is both heartwarming and heartbreaking, this is a must see for any fan of Queen.',
    reviewAuthor: 'Gimly',
    reviewDate: '2019-03-08T14:13:56.569Z',
    reviewFormattedDate: 'March 8, 2019',
    reviewRating: 8.0,
  },
  {
    reviewText:
      'A wonderful cast and a story that is both heartwarming and heartbreaking, this is a must see for any fan of Queen.',
    reviewAuthor: 'Gimly',
    reviewDate: '2019-03-08T14:13:56.569Z',
    reviewFormattedDate: 'March 8, 2019',
    reviewRating: 8.0,
  },
  {
    reviewText:
      'A wonderful cast and a story that is both heartwarming and heartbreaking, this is a must see for any fan of Queen.',
    reviewAuthor: 'Gimly',
    reviewDate: '2019-03-08T14:13:56.569Z',
    reviewFormattedDate: 'March 8, 2019',
    reviewRating: 8.0,
  },
  {
    reviewText:
      'A wonderful cast and a story that is both heartwarming and heartbreaking, this is a must see for any fan of Queen.',
    reviewAuthor: 'Gimly',
    reviewDate: '2019-03-08T14:13:56.569Z',
    reviewFormattedDate: 'March 8, 2019',
    reviewRating: 8.0,
  },
];

export const films: MovieCardProps[] = [
  {
    id: '1',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    description:
      'The second installment of the \'Fantastic Beasts\' series featuring the adventures of Magizoologist Newt Scamander.',
    releaseDate: '2018-11-16',
    genre: 'Fantasy',
    trailer:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 111,
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    previewSrc: 'img/bohemian-rhapsody.jpg',
    description:
      'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid.',
    releaseDate: '2018-10-24',
    genre: 'Drama',
    trailer:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 121,
  },
  {
    id: '3',
    title: 'Macbeth',
    previewSrc: 'img/macbeth.jpg',
    description:
      'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.',
    releaseDate: '2015-10-02',
    genre: 'Drama',
    trailer:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 113,
  },
  {
    id: '4',
    title: 'Aviator',
    previewSrc: 'img/aviator.jpg',
    description:
      'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career.',
    releaseDate: '2004-12-25',
    genre: 'Drama',
    trailer:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 170,
  },
  {
    id: '5',
    title: 'We need to talk about Kevin',
    previewSrc: 'img/we-need-to-talk-about-kevin.jpg',
    description:
      'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does.',
    releaseDate: '2011-09-28',
    genre: 'Thriller',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 170,
  },
  {
    id: '6',
    title: 'What We Do in the Shadows',
    previewSrc: 'img/what-we-do-in-the-shadows.jpg',
    description:
      'Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, and trying to get into nightclubs.',
    releaseDate: '2014-06-19',
    genre: 'Horror',
    trailer:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 170,
  },
  {
    id: '7',
    title: 'Revenant',
    previewSrc: 'img/revenant.jpg',
    description:
      'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    releaseDate: '2015-12-25',
    genre: 'Action',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 170,
  },

  {
    id: '8',
    title: 'Johnny English',
    previewSrc: 'img/johnny-english.jpg',
    description:
      'After a sudden attack on MI5, Johnny English, Britain\'s most confident, yet unintelligent spy, becomes Britain\'s only spy.',
    releaseDate: '2003-04-06',
    genre: 'Action',
    trailer:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    director: 'David Yates',
    rating: 6.6,
    ratingLevel: 'Very good',
    ratingsCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    reviews: reviews,
    runtime: 160,
  },
];
