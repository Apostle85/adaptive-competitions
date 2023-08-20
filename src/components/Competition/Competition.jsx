import './Competition.css';

const Competition = ({ className, index, currentIndex, data, onClick }) => {
  return (
    <li onClick={onClick}
      className={`hexagon ${className ?? ''}`}
    >
      {index !== currentIndex ? (
        <p className='hexagon__text hexagon__text_size_medium'>
          {data.date}
        </p>
      ) : (
        <div className='hexagon__content'>
          <p className='hexagon__text'>{data.stadium}</p>
          <p className='hexagon__text hexagon__text_type_date'>
            {data.date}
          </p>
          <p className='hexagon__text'>{data.time}</p>
          <button className='hexagon__button'>Купить билет</button>
        </div>
      )}
    </li>
  );
}

export default Competition;