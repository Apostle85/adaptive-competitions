import './App.css';
import {competitions, competitionStyles} from '../../utils/constants';
import Header from '../Header/Header';
import Competition from '../Competition/Competition';
import Competitor from '../Competitor/Competitor';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const scrollRef = useRef(null);
  const [currCompIndex, setCurrCompIndex] = useState(0);
  useEffect(() => {
    const scrollElement = scrollRef.current;
    const scrollHandler = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 0) {
        setCurrCompIndex((cur) =>
          e.deltaY > 0
            ? cur + 1 < competitions.length
              ? cur + 1
              : cur
            : cur - 1 >= 0
            ? cur - 1
            : cur
        );
      }
    };
    scrollElement.addEventListener('wheel', scrollHandler);
    return () => {
      scrollElement.removeEventListener('wheel', scrollHandler);
    };
  }, []);

  const clickHandler = (e, index) => {
    console.log(index);
    setCurrCompIndex(index);
  };

  useEffect(() => {
    console.log('INDEX:', currCompIndex);
  }, [currCompIndex]);

  return (
    <div className='page'>
      <Header />
      <main ref={scrollRef} className='main'>
        <Competitor name={competitions[currCompIndex]?.competitors[0]} />
        <ul className='main__competitions'>
          {competitions.map((competition, index) => index - currCompIndex <= 2 && index - currCompIndex >= -2 &&
            (<Competition
              className={competitionStyles[2+currCompIndex-index]}
              key={index}
              index={index}
              currentIndex={currCompIndex}
              data={competition}
              onClick={(e) => clickHandler(e, index)}
            />) 
          )}
        </ul>
        <Competitor
          className='competitor_align_right'
          name={competitions[currCompIndex]?.competitors[1]}
        />
      </main>
    </div>
  );
};

export default App;
