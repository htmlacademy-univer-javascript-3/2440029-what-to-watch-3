import { useCallback, useState } from 'react';
import { FilmFullInfo } from '../../types/films';
import DetailsTab from './details';
import OverviewTab from './overview';
import ReviewsTab from './reviews';


function Tabs({ film }: { film: FilmFullInfo }) {
  const [selectedTab, updateTab] = useState('overview');

  const switchTab = useCallback((tab: string) => {
    updateTab(tab);
  }, []);

  const TabLink = ({ name, label }: { name: string; label: string }) => (
    <li
      className={`film-nav__item ${
        selectedTab === name ? 'film-nav__item--active' : ''
      }`}
    >
      <a
        href='#'
        className='film-nav__link'
        onClick={(e) => {
          e.preventDefault();
          switchTab(name);
        }}
      >
        {label}
      </a>
    </li>
  );

  return (
    <div>
      <nav className='film-nav film-card__nav'>
        <ul className='film-nav__list'>
          <TabLink name='overview' label='Overview' />
          <TabLink name='details' label='Details' />
          <TabLink name='reviews' label='Reviews' />
        </ul>
      </nav>

      {selectedTab === 'overview' && <OverviewTab film={film} />}
      {selectedTab === 'details' && <DetailsTab film={film} />}
      {selectedTab === 'reviews' && <ReviewsTab filmId={film.id} />}
    </div>
  );
}

export default Tabs;
