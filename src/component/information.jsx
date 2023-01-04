import React, { useContext } from 'react';
import data from '../data';
import { useState } from 'react';
import { Quote } from 'react-bootstrap-icons';
import { MyCounter } from '../App';
import { useEffect } from 'react';

const Information = () => {
  const { index, setIndex } = useContext(MyCounter);
  const [people] = useState(data);

  useEffect(() => {
    console.log(index);
    let lastSlide = people.length - 1;
    if (index < 0) {
      setIndex(lastSlide);
    }
    if (index > lastSlide) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let timeHanlde = setTimeout(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(timeHanlde);
  }, [index]);

  return (
    <section className="section-center">
      {people.map((item, itemIndex) => {
        let position = 'nextSlide';
        if (index === itemIndex) {
          position = 'activeSlide';
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === people.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <article className={position} key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.qoute}</p>
            <Quote />
          </article>
        );
      })}
    </section>
  );
};

export default Information;
