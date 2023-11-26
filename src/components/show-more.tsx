type ShowMoreProps = {
    onShowMoreClick: () => void;
    visible: boolean;
};

export const ShowMore = ({ onShowMoreClick, visible }: ShowMoreProps) => (
  <div className='catalog__more'>
    {visible && <button className='catalog__button' type='button' onClick={onShowMoreClick}>Show more</button>}
  </div>
);

