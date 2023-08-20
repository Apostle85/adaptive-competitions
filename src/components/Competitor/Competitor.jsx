import './Competitor.css';

const Competitor = ({ className, name }) => {
  return (
    <div className={`competitor ${className || ''}`}>
      <p className='competitor__name'>
        { name ??
          'Клуб не назначен'}
      </p>
    </div>
  );
};

export default Competitor;
