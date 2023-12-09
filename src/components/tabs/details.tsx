import { MovieCardProps } from '../movie-card';

function DetailsTab({ film }: { film: MovieCardProps }) {

  // const formatRunTime = (runtime: number) => {
  //   const hours = Math.floor(runtime / 60);
  //   const minutes = runtime % 60;
  //   return `${hours}h ${minutes}m`;
  // };

  const DetailItem = ({ title, value }: { title: string; value: string | undefined }) => (
    <p className='film-card__details-item'>
      <strong className='film-card__details-name'>{title}</strong>
      <span className='film-card__details-value'>{value}</span>
    </p>
  );

  return (
    <div className='film-card__text film-card__row'>
      <div className='film-card__text-col'>
        {/* <DetailItem title='Director' value={film.director} />
        <DetailItem title='Starring' value={film.starring?.join(', ')} /> */}
      </div>

      <div className='film-card__text-col'>
        {/* <DetailItem title='Run Time' value={formatRunTime(film.runtime ?? 999)} /> */}
        <DetailItem title='Genre' value={film.genre} />
        <DetailItem title='Released' value={film.releaseDate} />
      </div>
    </div>
  );
}

export default DetailsTab;
